import React, {Component} from 'react';
import './displaybox.css'

class DisplayBox extends Component {
    constructor(props){
        super(props);

        this.state = {
            
        }
    }
    


    render(){
        const {people, obj} = this.props;
        return(
            
            <div className='people-list'>
                <div className='counter'>{people[obj].id}/25</div>
                <div className="names">
                    {people[obj].name.first} {people[obj].name.last}
                </div>
                <div className='location'><span className='bold'>From: </span>{people[obj].city}, {people[obj].country}</div>
                
                <div className='label'><span className='bold'>Job Title: </span>{people[obj].title}</div>
                <div className='label-1'><span className='bold'>Employer: </span> {people[obj].employer}</div>
                <div className='list'>
                <span className='bold'>Favorite Movies: </span>
                <ol>
                    <li>{people[obj].favoriteMovies[0]}</li>
                    <li>{people[obj].favoriteMovies[1]}</li>
                    <li>{people[obj].favoriteMovies[2]}</li>
                </ol>
                </div>
            </div>
        )
    }
}

export default DisplayBox