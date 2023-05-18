import React from "react";
import SubmitButton from "../../../../components/button/SubmitButton";
import {PlatformAPI} from "../../../../platform/PlatformAPI";
import {HistoryEntityData} from "../../../../types/chameleon-platform.common";
import {InputModelInfo, InputType} from "../../../../types/chameleon-client";

export default function EmptyInputUploader(type: InputType, parameter : Object, modelData : InputModelInfo, executeData : HistoryEntityData) {

    let parameters = JSON.stringify({ parameter: parameter });
    let file = new File(["{}"], "empty");
    const modelId = modelData?.id;

    const handleModelStart = async (event: React.FormEvent<HTMLFormElement>) => {
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
            <div className="md:p-2 space-x-3 flex justify-between items-center border-b border-gray-300" style={{ backgroundColor: '#F6F6F6' }}>
                <p className="text-xl font-semibold">Control Model</p>
            </div>
            <div className="flex justify-center items-center mt-20">
                {
                    type == InputType.EXECUTE ? (
                        <SubmitButton onClick={handleModelStart} text="Start Model" className="color-btn text-2xl" disabled={executeData !== undefined}/>
                    ) : (
                        ''
                    )
                }
            </div>
        </div>
    );
}