import React, { useEffect, useRef } from "react";
import "video.js/dist/video-js.css";
import "@videojs/themes/dist/city/index.css";
import videojs from "video.js";
import { FileUtils } from "../../../../utils/FileUtils";
import { DownloadUtils } from "../../../../utils/DownloadUtils";
import { HistoryEntityData } from "../../../../types/chameleon-platform.common";

export default function VideoOutputModule(executeData: HistoryEntityData) {

    const videoRef = useRef<HTMLVideoElement>(null);
    let outputInformation = executeData?.outputInfo?.fileName;
    const extension = outputInformation?.split('.').pop();
    let outputPath = executeData?.outputPath;
    let outputSize = executeData?.outputInfo?.fileSize;
    let outputName = executeData?.outputInfo?.fileName;

    useEffect(() => {
        if (videoRef.current) {
            const player = videojs(videoRef.current, {}, () => {
            });
            player.play();
        }
    })

    return (
        <div>
            <div
                className="md:px-5 md:py-2 space-x-3 flex justify-between items-center border-b border-gray-300"
                style={{ backgroundColor: '#F6F6F6' }}
            >
                <p className="text-xl font-semibold">Output</p>
                <div className="flex items-center rounded-lg hover:drop-shadow-xl focus:bg-white bg-white">
                    <button
                        className="submit-btn text-sm"
                        onClick={async () => {
                            DownloadUtils.download('/' + outputPath, outputName);
                        }}
                    >
                        Download
                    </button>
                </div>
            </div>
            <div className="overflow-y-auto max-h-[352px]">
                <br />
                <p>
                    <span className="pl-5">Output Format :</span> {extension}
                </p>
                <p>
                    <span className="pl-5">Size :</span> {FileUtils.formatBytes(outputSize)}
                </p>
                <div className="px-5">
                    <video
                        src={'/'+ outputPath}
                        className="video-js vjs-theme-city"
                        controls
                        autoPlay={false}
                        ref={videoRef}
                        style={{ maxWidth: '100%', maxHeight : '70%'}}
                    />
                </div>
            </div>
        </div>
    );
}