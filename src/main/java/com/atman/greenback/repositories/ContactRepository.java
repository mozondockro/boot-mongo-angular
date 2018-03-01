package com.atman.greenback.repositories;

import org.springframework.data.repository.CrudRepository;

import com.atman.greenback.models.Contact;

public interface ContactRepository extends CrudRepository<Contact, String>{
	
    @Override
    Contact findOne(String id);

    @Override
    void delete(Contact deleted);

}