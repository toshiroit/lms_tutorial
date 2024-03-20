'use client'

import { ourFileRouter } from "@/app/api/uploadthing/core";
import { UploadDropzone } from "@/lib/uploadthing";
import toast from "react-hot-toast";

interface FileUploadProps {
    onChane:(url?:string)=>void;
    endpoint:keyof typeof ourFileRouter
}
export const FileUpload =({onChane,endpoint}:FileUploadProps)=> {
    return (
        <UploadDropzone endpoint={endpoint} onClientUploadComplete={(res)=>{
            onChane(res?.[0].url);
        }}
        onUploadError={(error:Error)=>{
            toast.error(`${error?.message}`)
        }}/>
    )
}