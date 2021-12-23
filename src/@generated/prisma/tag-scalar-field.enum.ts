import { registerEnumType } from '@nestjs/graphql';

export enum TagScalarFieldEnum {
    id = "id",
    uid = "uid",
    name = "name",
    use_count = "use_count",
    user_id = "user_id",
    is_delete = "is_delete",
    created_at = "created_at",
    updated_at = "updated_at"
}


registerEnumType(TagScalarFieldEnum, { name: 'TagScalarFieldEnum', description: undefined })
