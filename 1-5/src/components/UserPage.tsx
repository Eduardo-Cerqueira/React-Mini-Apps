import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function UserPage() {
    const { id } = useParams();
    const [user, setUser] = useState<User>();

    useEffect(() => {
        const users: User[] = [
            {
                id: 1,
                name: "Michel",
                icon: "https://api.iconify.design/line-md:account.svg"
            },
            {
                id: 2,
                name: "Jean",
                icon: "https://api.iconify.design/line-md:emoji-smile.svg"
            },
            {
                id: 3,
                name: "Jackie",
                icon: "https://api.iconify.design/line-md:account-alert.svg"
            }
        ]


        const user = users.filter((user: User) => user.id == Number(id))

        setUser(user[0]);
    }, []);

    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '90vh' }}>
                {user &&
                <div style={{ display: 'flex' }}>
                    <img style={{ width: '50px' }} src={user.icon} alt="Logo" />
                    <h2 style={{ marginLeft: '20px' }} >Hello, i'm {user.name}</h2>
                </div>
                }
                {!user &&
                <div style={{ display: 'flex' }}>
                    <img style={{ width: '50px' }} src={"https://api.iconify.design/line-md:coffee-half-empty-twotone-loop.svg"} alt="Logo" />
                    <h2 style={{ marginLeft: '20px' }} >User not found</h2>
                </div>
                }
            </div>
        </>
    )
}
