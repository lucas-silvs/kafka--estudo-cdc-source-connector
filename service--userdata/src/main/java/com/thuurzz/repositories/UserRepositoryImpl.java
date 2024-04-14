package com.thuurzz.repositories;

import com.thuurzz.datasources.UserDataSource;
import com.thuurzz.datasources.entities.UserEntity;
import com.thuurzz.entities.User;
import com.thuurzz.repositories.mapper.UserEntityMapper;
import jakarta.enterprise.context.ApplicationScoped;
import jakarta.inject.Inject;

import java.util.List;

@ApplicationScoped
public class UserRepositoryImpl implements UserRepository {

    @Inject
    private UserDataSource userDataSource;

    private final UserEntityMapper mapper = UserEntityMapper.INSTANCE;

    @Override
    public User createUser(User user) {
        UserEntity newUserEntity = userDataSource.createUser(mapper.mapping(user));
        User newUser = mapper.mapping(newUserEntity);
        return newUser;
    }

    @Override
    public User getUserById(String id) {
        return null;
    }

    @Override
    public User updateUser(String id, User user) {
        return null;
    }

    @Override
    public void deleteUser(String id) {

    }

    @Override
    public List<User> listUsers() {
        return List.of();
    }
}
