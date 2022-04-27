import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const dummyUser = [{
        id: 'u1',
        name: 'Mert Destici',
        image: 'https://media-exp1.licdn.com/dms/image/C4D03AQF-PAThRB5tEg/profile-displayphoto-shrink_200_200/0/1628660386739?e=1655942400&v=beta&t=bziTMOlVZTMp2otaVJbPGX9e0BbD1pSrcRgk2oz-dp4',
        places: 2
    }, {
        image: "https://www.sezerbozkir.com/wp-content/uploads/2019/07/sezerbozkir.png",
        id: 'u2',
        name: 'Sezer BOZKIR',
        places: 3
    }, {
        id: 'u3',
        name: 'Emir Elkabes',
        image: 'https://fastly.4sqi.net/img/user/260x260/5059923_hyrE1MTO_K1P0nD04O9WaMFvjGW-ouDcs5patTkGY8AqFG2q1Om3NiM0IpDVG4MkMU1DfD8SK',
        places: 3
    }]
    return <UsersList items={dummyUser}/>
}

export default Users;