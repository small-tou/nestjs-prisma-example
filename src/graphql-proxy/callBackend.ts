import fetch from 'node-fetch';
import { CallBackendArguments } from '@yu_tou/swagger-to-graphql';
import { URLSearchParams } from 'url';
import { NestConfig } from '../config';

function getBodyAndHeaders(
  body: any,
  bodyType: 'json' | 'formData',
  headers: { [key: string]: string } | undefined,
) {
  if (!body) {
    return { headers };
  }

  if (bodyType === 'json') {
    return {
      headers: {
        'Content-Type': 'application/json',
        ...headers,
      },
      body: JSON.stringify(body),
    };
  }

  return {
    headers,
    body: new URLSearchParams(body),
  };
}
const API_BASE_URL = NestConfig.proxyApiBaseUrl;
export async function callBackend({
  requestOptions: { method, body, baseUrl, path, query, headers, bodyType },
}: CallBackendArguments<any>) {
  const searchPath = query ? `?${new URLSearchParams(query)}` : '';
  const url = `${API_BASE_URL}${path}${searchPath}`;
  const bodyAndHeaders = getBodyAndHeaders(body, bodyType, headers);
  const response = await fetch(url, {
    method,
    ...bodyAndHeaders,
  });

  const text = await response.text();
  if (response.ok) {
    try {
      return JSON.parse(text);
    } catch (e) {
      return text;
    }
  }
  throw new Error(`Response: ${response.status} - ${text}`);
}
