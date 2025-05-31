import React from 'react'
import * as Dialog from '@radix-ui/react-dialog';
import { BiX } from 'react-icons/bi';

interface MyDialog {
    isDialogOpen: boolean,
    onOpenChange: (ourSetFunction: boolean) => void,
    message: string
}


const EmailDialog = ({ isDialogOpen, onOpenChange, message }: MyDialog) => {
    return (
        <div>
            <Dialog.Root open={isDialogOpen} onOpenChange={onOpenChange}>

                <Dialog.Portal>

                    <Dialog.Overlay className="fixed inset-0 bg-black/50 flex items-center justify-center z-80" />

                    <Dialog.Content className="fixed z-90 left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-gray-900 p-8 rounded-lg shadow-xl text-center max-w-sm w-[90%] animate-in fade-in zoom-in-95 data-[state=closed]:animate-out data-[state=closed]:fade-out data-[state=closed]:zoom-out-95 duration-200">

                        <Dialog.Title className="text-sm">Thank you for contacting me.</Dialog.Title>

                        <Dialog.Description className="text-lg text-white mt-3">
                            {message}
                        </Dialog.Description>


                        {/*Close Buttons*/}
                        <Dialog.Close asChild>
                            <button className='mt-6 rounded-lg block w-max mx-auto text-sm px-4 py-2 bg-white text-black cursor-pointer
                            hover:bg-gray-300 transition-all ease-in duration-200'>
                                Okay
                            </button>
                        </Dialog.Close>

                        <Dialog.Close asChild>
                            <BiX className="text-3xl absolute top-2 right-2 p-2" />
                        </Dialog.Close>

                    </Dialog.Content>
                </Dialog.Portal>
            </Dialog.Root>
        </div>
    )
}

export default EmailDialog;