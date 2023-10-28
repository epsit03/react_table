const UserData = ({users}) => {
    return (
        <>
            {
                users.map((curUser) => {
                    const {id, name,email} = curUser;
                    const {street, suite, city, zipcode} = curUser.address;

                    return (
                        <tr key = {id}>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{email}</td>
                            <td>{street}, {suite}, {city}, {" "}, {zipcode}</td>
                        </tr>
                    )
                })
            }
        </>
    )
}

export default UserData;