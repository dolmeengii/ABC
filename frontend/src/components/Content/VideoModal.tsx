import { forwardRef } from 'react';
import Video from './Video';
import Dialog from '../Dialog';
import { Clip } from '@/pages/VideoResultPage/type';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';
import { ProcessedVideoByInnings } from '@/api/type';

type VideoModal = {
    processedVideo: ProcessedVideoByInnings[];
    isReadyToLoadVideo: boolean;
    onClick: () => void;
};

const VideoModal = forwardRef<HTMLDialogElement, VideoModal>(
    ({ processedVideo, isReadyToLoadVideo, onClick }: VideoModal, ref) => {
        if (processedVideo[0])
            return (
                <Dialog onClick={onClick} ref={ref}>
                    {isReadyToLoadVideo && (
                        <div className="video-container">
                            <div className="videoModal-title">
                                <FontAwesomeIcon
                                    icon={faBookmark}
                                    className={
                                        processedVideo[0].favorite
                                            ? 'bookmark favorite'
                                            : 'bookmark'
                                    }
                                />
                                <span>VS {[processedVideo[0].pitcherName]}</span>

                                <button onClick={onClick}>X</button>
                            </div>

                            <Video
                                poster=""
                                src={processedVideo[0].processedVideoUrl}
                                source_type="mp4"
                            />
                        </div>
                    )}
                </Dialog>
            );
    }
);

export default VideoModal;