import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { User } from "./models/user.model"
import { UsersService } from './users.service';
import { CreateUserInput } from './dto/create-user.input';
import { create } from 'domain';

@Resolver(() => User)
export class UsersResolver {
    constructor(private readonly usersService: UsersService) { }

    @Mutation(() => User)
    async createUser(@Args("createUserInput") createUserInput: CreateUserInput) {
        return this.usersService.createUser(createUserInput)
    }

    // We are telling which entity is returning from this function
    // provide an options object => which override the name of the query to users
    // by default nestjs graphql name the query based on the function name
    @Query(() => [User], { name: "users" })
    async getUsers() {
        return this.usersService.getUsers()
    }
}
