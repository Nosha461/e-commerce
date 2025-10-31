import { Body, Controller ,Delete,Get, Param, Patch, Post} from "@nestjs/common"
import type { Request } from "express"

@Controller('users')

export class UserController{

@Post()
create(@Body() req:Request):any{
return req
}


@Get(':userName')
findall(@Param('userName') userName:string):string{
return userName
}

@Get(':userName')
findone(@Param('userName') userName:"string"):string{
return userName
}


@Patch(':userName')
update(@Param('userName')userName:"string") :string{
return "user updated"
}


@Delete()
delete() : string{
return "user deleted"

}

}