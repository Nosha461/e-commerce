import { Body, Controller ,Delete,Get, Param, Patch, Post} from "@nestjs/common"
import type { Request } from "express"

@Controller('users')

export class UserController{

@Post()
create(@Body() req:Request):any{
return req
}


@Get()
findall():string[]{
return ["menna" ,"ahmed"]
}

@Get(':userName')
findone(@Param('userName') userName:"string"):string{
return userName
}


@Patch()
update():string{
return "user updated"
}


@Delete()
delete() : string{
return "user deleted"

}

}