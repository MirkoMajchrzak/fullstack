"use client";

import useUploadModal from "@/hooks/useUploadModal";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import toast from "react-hot-toast";
import { useUser } from "@/hooks/useUser";
import uniqid from "uniqid";

const UploadModal = () => {
    const [isLoading, setIsLoading] = useState(false);
    const uploadModal = useUploadModal();
    const { user } = useUser();

    const {
        register,
        handleSubmit,
        reset
    } = useForm<FieldValues>({
        defaultValues: {
            author: '',
            title: '',
            song: null,
            image: null,
        }
    })

    const onChange =(open: boolean) => {
        if (!open) {
            reset();
            uploadModal.onClose();
        }
    }

    const onSubmit: SubmitHandler<FieldValues> = async (values) => {
        try {
            setIsLoading(true);

            const imageFile = values.image?.[0];
            const songFile = values.song?.[0];

            if (!imageFile || !songFile || !user) {
                toast.error("da fehlt was...");
                return;
            }

            const uniqueId = uniqid();

        } catch (error) {
            toast.error("Irgendwas ist schief gelaufen");
        } finally {
            setIsLoading(false);
        }
    }

    return ( 
        <Modal
        title="Füge ein Lied hinzu"
        description="Lade eine mp3 Datei hoch"
        isOpen={uploadModal.isOpen}
        onChange={onChange}
        >
            <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-y-4"
            >
                <Input
                id="title"
                disabled={isLoading}
                {...register('title', {required: true })}
                placeholder="Song title"
                />
                <Input
                id="author"
                disabled={isLoading}
                {...register('author', {required: true })}
                placeholder="Author"
                />
                <div className="">
                    <div className="pb-1">
                        Wähle eine Song Datei aus
                    </div>
                    <Input
                id="song"
                type="file"
                disabled={isLoading}
                accept=".mp3"
                {...register('song', {required: true })}
                />
                </div>
                <div className="">
                    <div className="pb-1">
                        Wähle ein Titelbild aus
                    </div>
                    <Input
                id="image"
                type="file"
                disabled={isLoading}
                accept="image/*"
                {...register('image', {required: true })}
                />
                </div>
                <Button disabled={isLoading} type="submit">
                    Hochladen
                </Button>
            </form>
        </Modal>
     );
}
 
export default UploadModal;