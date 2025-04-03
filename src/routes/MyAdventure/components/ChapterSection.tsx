import { ChapterType } from "../../../types/adventure/ChapterType";
import ArrowDownIcon from '../../../assets/icons/arrow_down.svg';
import ArrowUpIcon from '../../../assets/icons/arrow_up.svg';
import { useEffect, useRef, useState } from "react";
import { AdventureTopic } from "../../../components/AdventureTopic";

interface Props {
    index: string
    chapter: ChapterType
    handleExpand: (chapterId: string) => void
    handleChapterTopicCompleted: (chapterId: string, topicId: string, completed: boolean) => void
}

const ChapterSection = (props: Props) => {
    const topicContainerRef = useRef<HTMLDivElement>(null);
    const textAreaRef = useRef<HTMLTextAreaElement>(null);
    const [height, setHeight] = useState(0);

    function updateDivHeight() {
        if (props.chapter.expanded && topicContainerRef.current) {
            setHeight(topicContainerRef.current.scrollHeight);
        } else {
            setHeight(0);
        }
    }

    useEffect(() => {
        updateDivHeight();
    }, [props.chapter.expanded])

    return (
        <div className="w-full relative min-h-[63px] overflow-hidden">
            <div onClick={() => { props.handleExpand(props.chapter.id) }} className="w-full z-20 absolute cursor-pointer hover:border-neutral/10 border border-transparent bg-neutral/5 font-bold text-[20px] text-neutral rounded-[10px] h-[63px] flex justify-between items-center px-5">
                <p>{`${props.index}. ${props.chapter.title}`}</p>
                {
                    props.chapter.expanded ?
                        <button><ArrowUpIcon /></button>
                        :
                        <button><ArrowDownIcon /></button>
                }
            </div>

            <div ref={topicContainerRef} className={`ps-20 w-full mt-[63px] transition-all duration-300 overflow-y-hidden`} style={{ maxHeight: `${height}px` }}>
                <div className="mt-5 grid grid-cols-2">
                    <div className="flex flex-col gap-5">
                        {props.chapter.topics.map((topic) => {
                            return <AdventureTopic chapterId={props.chapter.id} handleChapterTopicCompleted={props.handleChapterTopicCompleted} topic={topic} />
                        })}
                    </div>
                    <div className="w-full border min-h-60 border-neutral/18 rounded-[10px]">
                        <textarea ref={textAreaRef} className="p-6 text-base-content/70 outline-none w-full h-full text-[16px]"></textarea>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChapterSection;