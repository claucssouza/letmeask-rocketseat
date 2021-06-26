import { useParams, useHistory } from 'react-router-dom';
import { Button } from '../components/Button';
import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';
import '../styles/room.scss';
import logoImg from '../assets/images/logo.svg';
import deleteImg from '../assets/images/delete.svg';

type RoomParams = {
    id: string;
}


export const AdminRoom = () => {

    const params = useParams<RoomParams>();
    const { title, questions } = useRoom(params.id)
    const history = useHistory();

    const handleDeleteQuestion = async (questionId: string) => {
        if (window.confirm('Tem certeza que deseja excluir essa pergunta?')) {
            await database.ref(`rooms/${params.id}/questions/${questionId}`).remove();
        }
    };

    const handleEndRoom = async () => {
        await database.ref(`rooms/${params.id}`).update({
            endedAt: new Date()
        })

        history.push('/');
    }

    return (
        <div id="page-room">
            <header>
                <div className="content">
                    <img src={logoImg} alt="" />
                    <div>
                        <RoomCode code={params.id} />
                        <Button
                            isOutlined
                            onClick={handleEndRoom}
                        >Encerrar Sala</Button>
                    </div>
                </div>
            </header>
            <main>
                <div className="room-title">
                    <h1>Sala {title}</h1>
                    {questions.length > 0 && (
                        <span>{questions.length} perguntas</span>
                    )}
                </div>
                <div className="question-list">
                    {questions.map((question, index) => (
                        <Question
                            content={question.content}
                            author={question.author}
                            key={index}
                        >
                            <button
                                type="button"
                                onClick={() => handleDeleteQuestion(question.id)}
                            >
                                <img src={deleteImg} alt="Remover pergunta" />
                            </button>
                        </Question>
                    ))}
                </div>
            </main>
        </div>
    );
};