import { TopicType } from "../../types/adventure/TopicType";
import CheckedIcon from '../../assets/icons/checked.svg'

interface Props {
    chapterId: string
    topic: TopicType
    handleChapterTopicCompleted: (chapterId: string, topicId: string, completed: boolean) => void
}

const AdventureTopic = (props: Props) => {
    return (
        <div className="w-full flex items-start gap-5">
            <button onClick={() => { props.handleChapterTopicCompleted(props.chapterId, props.topic.id, !props.topic.completed) }} className={`w-[23px] h-[23px] rounded-[3px] cursor-pointer ${props.topic.completed ? 'bg-action-overview/28 border border-neutral/22' : 'bg-neutral/3 border border-neutral/22'}`}></button>
            <p className="text-base-content text-[16px]">{props.topic.name}</p>
        </div>
    )
}

export default AdventureTopic;