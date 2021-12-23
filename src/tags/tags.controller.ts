import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  Query,
  Request,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import {
  ApiBearerAuth,
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CreateTagDto } from './dto/create-tag.dto';
import {
  ApiPagedResponse,
  Pageable,
  PagedDto,
  Pager,
} from '../helpers/pager.helper';
import { SelectTagDto } from './dto/select-tag.dto';
import { UpdateTagDto } from './dto/update-tag.dto';

@ApiTags('tags')
@ApiBearerAuth()
@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  @Post()
  @ApiOperation({ summary: '新建标签' })
  create(@Body() createTagDto: CreateTagDto, @Request() req) {
    return this.tagsService.create(createTagDto);
  }

  @Post(':uid')
  @ApiOperation({ summary: '更新标签' })
  update(@Body() updateTagDto: UpdateTagDto, @Param('uid') uid: string) {
    return this.tagsService.update(uid, updateTagDto);
  }

  @ApiPagedResponse(SelectTagDto)
  @Get()
  @ApiOperation({ summary: '获取所有标签，包含排序算法' })
  findAll(
    @Pageable() @Query() pager: Pager,
    @Query('onlyAdmin') onlyAdmin: boolean,
  ): Promise<PagedDto<SelectTagDto>> {
    const onlyAdminP = String(onlyAdmin) == 'true';
    return this.tagsService.findAll(pager, onlyAdminP);
  }

  @Get(':uid')
  @ApiResponse({ type: SelectTagDto })
  @ApiOperation({ summary: '获取某个标签信息' })
  findOne(@Param('uid') uid: string) {
    return this.tagsService.findOne(uid);
  }
}
