"use strict";


window.addEventListener( "DOMContentLoaded", () => {
    // const tasks = [
    //     {
    //         id: 0,
    //         category: 'Sport',
    //         title: 'New task1',
    //         body: 'Some quick example text to build on the panel title and make up the bulk of the panel\'s content.',
    //         date: `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}  ${new Date().getHours()}:${new Date().getMinutes()}`
    //     },
    //     {
    //         id: 1,
    //         category: 'Office',
    //         title: 'New task2',
    //         body: 'Some quick example text to build on the panel title and make up the bulk of the panel\'s content.',
    //         date: `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}  ${new Date().getHours()}:${new Date().getMinutes()}`
    //     },
    //     {
    //         id: 2,
    //         category: 'Home',
    //         title: 'New task3',
    //         body: 'Some quick example text to build on the panel title and make up the bulk of the panel\'s content.',
    //         date: `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}  ${new Date().getHours()}:${new Date().getMinutes()}`
    //     },
    //     {
    //         id: 3,
    //         category: 'Home',
    //         title: 'New task4',
    //         body: 'Some quick example text to build on the panel title and make up the bulk of the panel\'s content.',
    //         date: `${new Date().getDay()}.${new Date().getMonth()}.${new Date().getFullYear()}  ${new Date().getHours()}:${new Date().getMinutes()}`
    //     }
    // ];
    // const local_tasks = JSON.stringify(tasks);
    // localStorage.setItem('tasks',local_tasks);

    const my_list = document.querySelector( ".my-list" );
    const form = document.querySelector( '.form' );
    let tasks = [];

    async function getData() {
        const tasks = await JSON.parse( localStorage.getItem( 'tasks' ) );

        return tasks
    }

    getData()
        .then( data => {
        viewTasks( data );
        tasks = data;
    } );


    function createCard( { id, category, title, body, date } ) {
        const card = document.createElement( "div" );
        card.classList.add( 'card', 'special-color-dark', 'mb-3', 'my-5', 'mx-auto', 'col-6' );
        card.style.minWidth = '20rem';
        card.style.maxWidth = '25rem';

        const card_header = document.createElement( 'div' );
        card_header.classList.add( 'card-header', 'bg-success', 'text-white' );
        card_header.textContent = category;
        card.append( card_header );

        const card_body = document.createElement( 'div' );
        card_body.classList.add( 'card-body', 'text-white', 'position-relative' );
        card.append( card_body );

        const card_title = document.createElement( 'h5' );
        card_title.classList.add( 'card-title', 'd-flex', 'justify-content-between' );
        card_title.textContent = title;
        card_body.append( card_title );

        const card_text = document.createElement( 'p' );
        card_text.classList.add( 'card-text' );
        card_text.textContent = body;
        const p_date = document.createElement( 'p' );
        p_date.textContent = date;
        p_date.classList.add( 'text-right' );
        card_text.append( p_date );
        const p = document.createElement( 'p' );
        p.id = id;
        p.classList.add( 'position-absolute', 'fixed-bottom', 'text-right', 'px-2', 'my-2', 'confirm' );
        p.style.cursor = 'pointer';
        p.textContent = 'Confirm';
        card_text.append( p );
        card_body.append( card_text );

        return card
    }


    function viewTasks( tasks ) {

        tasks.forEach( elem => {
            my_list.append( createCard( elem ) );
        } )
    }


    form.addEventListener( "submit", e => {
        e.preventDefault();
        const obj = [{}];
        const text_category = document.getElementById( 'form101' ).value.trim();
        const text_title = document.getElementById( 'form102' ).value.trim();
        const text_body = document.getElementById( 'form103' ).value.trim();
        
        if ( text_title === '' || text_category === '' || text_body === '' ) {
            alert('Введите данные')
        }else {
            tasks.length === 0 ? obj[0].id = 0 : obj[0].id = ( tasks[tasks.length - 1].id + 1 );
            obj[0].category = text_category;
            obj[0].title = text_title;
            obj[0].body = text_body;
            obj[0].date = `${ new Date().getDay() }.${ new Date().getMonth() }.${ new Date().getFullYear() }  ${ new Date().getHours() }:${ new Date().getMinutes() }`;

            form.reset();

            tasks.push( obj[0] );
            localStorage.setItem( 'tasks', JSON.stringify( tasks ) );

            viewTasks( obj );
        }
    } );


    function deleteTasks( id ) {
        const index = tasks.findIndex( item => item.id === +id );
        tasks.splice( index, 1 );
    }


    my_list.addEventListener( 'click', evt => {
        const target = evt.target;

        if ( target.classList.contains( 'confirm' ) ) {
            let del = target.parentElement;
            deleteTasks( target.id );
            localStorage.setItem( 'tasks', JSON.stringify( tasks ) );
            while ( !del.classList.contains( 'card' ) ) {
                del = del.parentElement;
            }
            del.remove();
        }


    } )

} );