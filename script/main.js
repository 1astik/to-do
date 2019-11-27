"use strict";


window.addEventListener("DOMContentLoaded", () => {

    const tasks = [
        {
            id: '1',
            title: 'New task1',
            body: 'Some text fot task'
        },
        {
            id: '2',
            title: 'New task2',
            body: 'Some text fot task'
        },
        {
            id: '3',
            title: 'New task3',
            body: 'Some text fot task'
        },
        {
            id: '4',
            title: 'New task4',
            body: 'Some text fot task'
        }
    ];

    const form =document.forms['tasksForm'];
    const inputTitle = form[0];
    const inputBody = form[1];

    form.addEventListener("submit", onFormSubmit);
    
    function onFormSubmit( e ) {
        e.preventDefault();
    }

});