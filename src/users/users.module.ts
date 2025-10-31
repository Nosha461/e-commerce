import { Module } from "@nestjs/common";
import { UserController } from "./users.controller.js";

@Module({
controllers :[UserController]
})


export  class UserModule{}