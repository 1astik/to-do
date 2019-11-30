"use strict";


window.addEventListener( "DOMContentLoaded", () => {

    const tasks = [
        {
            category: 'Sport',
            title: 'New task1',
            body: 'Some quick example text to build on the panel title and make up the bulk of the panel\'s content.'
        },
        {
            category: 'Office',
            title: 'New task2',
            body: 'Some quick example text to build on the panel title and make up the bulk of the panel\'s content.'
        },
        {
            category: 'Home',
            title: 'New task3',
            body: 'Some quick example text to build on the panel title and make up the bulk of the panel\'s content.'
        },
        {
            category: 'Home',
            title: 'New task4',
            body: 'Some quick example text to build on the panel title and make up the bulk of the panel\'s content.'
        }
    ];


    function createCard( { category, title, body } ) {
        const card = document.createElement( "div" );
        card.classList.add( 'card', 'special-color-dark', 'mb-3', 'my-5', 'mx-auto' );
        card.style.maxWidth = '20rem';

        const card_header = document.createElement( 'div' );
        card_header.classList.add( 'card-header', 'bg-success', 'text-white' );
        card_header.textContent = category;
        card.append( card_header );

        const card_body = document.createElement( 'div' );
        card_body.classList.add( 'card-body', 'text-white' );
        card.append( card_body );

        const card_title = document.createElement( 'h5' );
        card_title.classList.add( 'card-title' );
        card_title.textContent = title;
        card_body.append( card_title );

        const card_text = document.createElement( 'p' );
        card_text.classList.add( 'card-text',  );
        card_text.textContent = body;
        card_body.append( card_text );

        return card
    }



    function viewTasks( tasks ) {
        const my_list  = document.querySelector(".my-list");

        tasks.forEach(elem => {
            my_list.append(createCard(elem));
        })
    }

    viewTasks(tasks);


    const form = document.querySelector('.form');

    form.addEventListener( "submit", onFormSubmit );

    function onFormSubmit( e ) {
        e.preventDefault();
    }









} );