import React from "react";
import {PlatformAPI} from "../../../../platform/PlatformAPI";
import {HistoryEntityData, ModelParameters} from "../../../../types/chameleon-platform.common";
import {InputModelInfo} from "../../../../types/chameleon-client";
import {PageType} from "../../../../types/chameleon-client.enum";

export default function EmptyInputUploader(type: PageType, parameters: ModelParameters, modelData: InputModelInfo, executeData: HistoryEntityData) {

    let file = new File(["{}"], "empty");
    const modelId = modelData?.id;

    const handleModelStart = async (event: React.FormEvent<HTMLButtonElement>) => {
        event.preventDefault();

        try {
            const executeInfo = await PlatformAPI.executeModel({
                modelId,
                parameters,
                input: file
            });
            console.log(executeInfo);
        } catch (error) {
        }
    };
    return (
        <div>
            <div className="md:p-2 space-x-3 flex justify-between items-center border-b border-gray-300"
                 style={{backgroundColor: '#F6F6F6'}}>
                <p className="text-xl font-semibold">Control Model</p>
            </div>
            <div className="flex justify-center items-center mt-20">
                {
                    type == PageType.EXECUTE ? (
                        <button onClick={handleModelStart} className="submit-btn text-2xl"
                                disabled={executeData !== undefined}>Start Model</button>
                    ) : (
                        ''
                    )
                }
            </div>
        </div>
    );
}