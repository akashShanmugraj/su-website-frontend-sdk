// todo Use "Better Comments" extension for VS Code for '// ?' , '// !' , '// *'  and '// //' comment tags.

// * I was able to acheive GET requests from clubs API, cannot figure out how to bring it out of component or const.

// ? Quite possibly code that must be used, cannot figure out implementation.

// ? const ClubDescription = () => {
// ?     const [clubDesc, setClubDesc] = useState([]);
// ?   
// ?     useEffect(() => {
// ?     fetchClubDescription()   
// ?       .then((response) => {
// ?         console.log(response.data);
// ?         setClubDesc(response.data)
// ?       });
// ?     }, [])
// ?     
// ?     console.log("Hello")

// ! Code exracted from internet, never worked.

// ! import React from 'react';
// ! import axios from 'axios';
// !
// ! export default function PersonList() {
// !     state = {
// !         persons: []
// !     }
// !     axios.get(`https://jsonplaceholder.typicode.com/users`)
// !       .then(res => {
// !         const persons = res.data;
// !         this.setState({ persons });
// !       })
// !       console.log(persons)
// !   }

// * Got this code to work. no idea why

// * const Clubs = () => {
// *     const [clubs, setClubs] = useState({});
// *     useEffect(() => {
// *       axios.get('http://localhost:3002/api/clubs')
// *         .then((res) => {
// *           let clubData = res.data
// *           setClubs(clubData)
// *           // console.log(clubs)
// *         })
// *         .catch((err) => {
// *           console.log(err);
// *         });
// *     }, []);
  
// // Insignificant parts of code extracted from interent.

//  // render() {
//  //   return (
//  //     <ul>
//  //       {
//  //         this.state.persons
//  //           .map(person =>
//  //             <li key={person.id}>{person.name}</li>
//  //           )
//  //       }
//  //     </ul>
//  //   )
//  // }
