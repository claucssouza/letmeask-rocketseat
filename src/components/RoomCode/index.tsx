import copyImg from '../../assets/images/copy.svg';
import './styles.scss';


type RoomCodeProps = {
    code: string;
}

export const RoomCode = (props: RoomCodeProps) => {
    
    const copyRoomCodeToClipboard = () => {
        navigator.clipboard.writeText(props.code);
    };

    return (
        <button className="room-code">
            <div>
                <img
                    src={copyImg}
                    alt="Copy room code"
                    onClick={copyRoomCodeToClipboard}
                />
            </div>
            <span>Sala {props.code}</span>
        </button>
    );
}