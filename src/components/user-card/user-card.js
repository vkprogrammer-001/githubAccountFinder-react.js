import './user-card.css'

export default function UserCard (props) {

    // console.log({props})

    // const {
    //     profileLink,
    //     accountLink,
    //     username
    // } = props || {}



    return (
        <div className="user">
            <img 
                src={props.profileLink} 
                alt="Profile" 
                width="50" 
                height="50" 
            />
            <a 
                href={props.accountLink} 
                target="_blank"
            > {props.username} </a>
            <p>{props.bio}</p>
            
        </div>
    )
}