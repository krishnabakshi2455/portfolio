"use client"
import { RefreshCcw } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from '@/components/ui/button'
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { PaperPlaneIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useAtom } from "jotai";

type flowNode = {
    message?: string,
    options?: string[],
    multiOptions?: string[],
    inputboxDisabled?: boolean,
    inputboxHide?: boolean,
    validation?: ((value: any) => Promise<boolean | string> | boolean | string)
    next?: string | ((value: any) => string),
    delay?: number,
    autoNext?: boolean,
    
    render?: (onSubmit: any) => React.ReactNode,
    customInput?: (value: any, onChange: (value: any) => void, onSubmit: (value: any) => void) => React.ReactNode
}

export type configType = {
    name: string,
    image?: string,
    initialStep: string,
    tooltip?: string,
    defaultOpen?: {
        open: boolean,
        delay?: number
    },
    flow: {
        [key: string]: flowNode
    },
    open: boolean,
    onOpenChange: (open: boolean) => void,
    primaryColor?: string,
    brandName?: string,
    favicon?: string
}

type MessageType = {
    id: number;
    type: 'loader' | 'user' | 'message' | 'singleChoice' | 'multiChoice' | 'custom';
    content: any;
    step: string;
    disabled?: boolean;
    selectedValue?: any;
    timestamp?: number; // Add timestamp
}

// Timestamp component with auto-update


function TimeStamp({ timestamp }: { timestamp: number }) {
    const [timeText, setTimeText] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = Date.now();
            const diff = now - timestamp;
            const seconds = Math.floor(diff / 1000);
            const minutes = Math.floor(seconds / 60);
            const hours = Math.floor(minutes / 60);
            const days = Math.floor(hours / 24);

            let text = '';

            if (seconds < 10) {
                text = 'just now';
            } else if (seconds < 60) {
                text = 'a few seconds ago';
            } else if (minutes < 60) {
                const date = new Date(timestamp);
                text = date.toLocaleTimeString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                });
            } else if (hours < 24) {
                const date = new Date(timestamp);
                text = date.toLocaleTimeString('en-IN', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                });
            } else {
                const date = new Date(timestamp);
                const dateStr = date.toLocaleDateString('en-IN', {
                    month: 'short',
                    day: 'numeric',
                });
                const timeStr = date.toLocaleTimeString('en-IN', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true,
                });
                text = `${dateStr} at ${timeStr}`;
            }

            setTimeText(text);
        };

        updateTime();
        const interval = setInterval(updateTime, 1000);
        return () => clearInterval(interval);
    }, [timestamp]);

    // Only show the dot if it's an actual time (not "ago" phrases)
    const showDot = !timeText.includes('ago') && timeText !== 'just now';

    return (
        <span className="text-xs text-gray-400 ml-2">
            {showDot ? `${timeText}` : timeText}
        </span>
    );
}


function Loader({ image, primaryColor }: { image: string, primaryColor: string }) {
    return (
        <div className="my-2 flex gap-2">
            <img src={image} className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex-none border border-primary" />
            <div className="p-2 bg-secondary rounded-lg flex items-center gap-1">
                <div className="w-2 h-2 rounded-lg animate-bounce" style={{ backgroundColor: primaryColor }}></div>
                <div className="w-2 h-2 rounded-lg animate-bounce delay-100" style={{ backgroundColor: primaryColor }}></div>
                <div className="w-2 h-2 rounded-lg animate-bounce delay-200" style={{ backgroundColor: primaryColor }}></div>
            </div>
        </div>
    )
}

function UserMessage({ msg, primaryColor }: { msg: any, primaryColor: string }) {
    return (
        <div className="flex justify-end my-2 ">
            <div className="text-primary-foreground p-2 rounded-lg break-all whitespace-pre-wrap" style={{ backgroundColor: primaryColor }}>
                {msg}
            </div>
        </div>
    )
}

function Message({ message, image, timestamp }: { message: any, image: string, timestamp: number }) {
    return (
        <div className="flex gap-2 my-2">
            <img src={image} className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex-none border border-primary whitespace-break-spaces" />
            <div>
                <div className="p-2 bg-secondary rounded-lg rounded-b-none">{message}</div>
                <TimeStamp timestamp={timestamp} />
            </div>
        </div>
    )
}

function SingleChoice({ message, image, items, onSelection, isDisabled, selectedValue, primaryColor, timestamp }: {
    message: any,
    image: string,
    items: string[],
    onSelection: (value: string) => void,
    isDisabled?: boolean,
    selectedValue?: string,
    primaryColor: string,
    timestamp: number
}) {
    const [selected, setSelected] = useState(selectedValue || '')

    const handleSelection = (item: string) => {
        if (isDisabled) return;

        if (selected === item) {
            setSelected('')
            onSelection('')
        } else {
            setSelected(item)
            onSelection(item)
        }
    }

    return (
        <div className="flex gap-2 my-2">
            <img src={image} className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex-none" alt={`${image}/chat-bot`} />
            <div className="flex-1">
                <div className="p-3 bg-secondary rounded-lg whitespace-break-spaces">{message}</div>

                <div className="mt-3 space-y-3">
                    {items.map((item, index) => (
                        <div key={index}
                            onClick={() => handleSelection(item)}
                            className={`flex items-center justify-between p-2 rounded-lg transition-colors border border-gray-200 ${isDisabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:bg-[#BADEFB]/20'
                                }`}
                        >
                            <span
                                style={{ color: primaryColor || "black" }}
                                className="">{item}</span>
                            <Checkbox
                                checked={selected === item}
                                onCheckedChange={() => handleSelection(item)}
                                disabled={isDisabled}
                                style={{
                                    ['--checkbox-color' as any]: primaryColor,
                                    ['--checkbox-border-color' as any]: primaryColor
                                }}
                                className="data-[state=checked]:bg-(--checkbox-color) data-[state=checked]:border-(--checkbox-border-color) rounded-none border-gray-300 shadow-none border-2 flex items-center justify-center"
                            />
                        </div>
                    ))}
                </div>
                <TimeStamp timestamp={timestamp} />
            </div>
        </div>
    )
}

function MultiChoice({ message, image, items, onSelection, isDisabled, selectedValue, primaryColor, timestamp }: {
    message: any,
    image: string,
    items: string[],
    onSelection: (value: string[]) => void,
    isDisabled?: boolean,
    selectedValue?: string[],
    primaryColor: string,
    timestamp: number
}) {
    const [selected, setSelected] = useState<string[]>(selectedValue || [])

    function toggleSelection(item: string) {
        if (isDisabled) return;

        const newSelected = selected.includes(item)
            ? selected.filter((i) => i !== item)
            : [...selected, item]

        setSelected(newSelected)
        onSelection(newSelected)
    }

    return (
        <div className="flex gap-2 my-2">
            <img src={image} className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex-none" />
            <div className="flex-1">
                <div className="p-3 bg-secondary rounded-lg whitespace-break-spaces">{message}</div>

                <div className="mt-3 space-y-2">
                    {items.map((item, index) => (
                        <div key={index}
                            onClick={() => toggleSelection(item)}
                            className={`flex items-center justify-between p-2 rounded-lg transition-colors border border-gray-200 ${isDisabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer hover:bg-gray-50'
                                }`}
                        >
                            <span className="text-gray-800">{item}</span>
                            <Checkbox
                                checked={selected.includes(item)}
                                onCheckedChange={() => toggleSelection(item)}
                                disabled={isDisabled}
                                style={{
                                    ['--checkbox-color' as any]: primaryColor,
                                    ['--checkbox-border-color' as any]: primaryColor
                                }}
                                className="data-[state=checked]:bg-(--checkbox-color) data-[state=checked]:border-(--checkbox-border-color)"
                            />
                        </div>
                    ))}
                </div>
                <TimeStamp timestamp={timestamp} />
            </div>
        </div>
    )
}

function CustomComponent({ component, image, timestamp }: { component: any, image: string, timestamp: number }) {
    return (
        <div className="flex gap-2 my-2">
            <img src={image} className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex-none border border-primary" />
            <div>
                <div className="p-2 bg-secondary rounded-lg rounded-b-none whitespace-break-spaces">{component}</div>
                <TimeStamp timestamp={timestamp} />
            </div>
        </div>
    )
}

function CustomInput({
    customInput,
    value,
    onChange,
    onSubmit
}: {
    customInput: (value: any, onChange: (value: any) => void, onSubmit: (value: any) => void) => React.ReactNode,
    value: any,
    onChange: (value: any) => void,
    onSubmit: (value: any) => void
}) {
    return (
        <div className="w-full">
            {customInput(value, onChange, onSubmit)}
        </div>
    )
}

export default function Chatbot({ config, onChatReload }: { config: configType, onChatReload?: () => void }) {
    const configRef = useRef<configType>(config)
    const scrollViewportRef = useRef<any>(null)
    const lastItemRef = useRef<any>(null)
    const inputRef = useRef<any>(null)
    const inputbtndiv = useRef<any>(null)
    const [open, setOpen] = useState(false)
    const [messageData, setMessageData] = useState<MessageType[]>([])
    const [input, setInput] = useState('')
    const [customInputValue, setCustomInputValue] = useState<any>('')
    const [currentStep, setCurrentStep] = useState<string>(configRef.current.initialStep)
    const [hasSelection, setHasSelection] = useState(false)
    const [isChoiceInput, setIsChoiceInput] = useState(false)
    const messageIdCounter = useRef(0)

    const primaryColor = configRef.current.primaryColor || '#000000'
    const brandName = configRef.current.brandName
    const favicon = configRef.current.favicon

    function handlechatbotclose() {
        setOpen(false)
    }

    const handleCustomInputChange = (value: any) => {
        setCustomInputValue(value);
        setInput(value);
    };

    const handleChoiceSelection = (value: any, messageId: number) => {
        setMessageData(prev => prev.map(msg =>
            msg.id === messageId ? { ...msg, selectedValue: value } : msg
        ))

        if (Array.isArray(value)) {
            setInput(value.join(", "));
            setHasSelection(value.length > 0);
        } else {
            setInput(value);
            setHasSelection(!!value);
        }
        setIsChoiceInput(true);

        setTimeout(() => inputRef.current?.focus(), 0);
    }

    async function validate(val: any, _step: string) {
        const step = configRef.current.flow[_step]

        const isSingleChoice = !!step.options;
        const isMultiChoice = !!step.multiOptions;
        const isChoiceStep = isSingleChoice || isMultiChoice;

        if (isChoiceStep && (!val || val.trim() === '')) {
            addMessageData('message', '⚠️ Please make a selection before submitting', _step)
            return false
        }

        if (step.validation) {
            const v = await step.validation(val)
            if (v === true) {
                return true
            } else if (v === false) {
                addMessageData('message', '⚠️Invalid Input!! Try again', _step)
                return false
            } else {
                addMessageData('message', v, _step)
                return false
            }
        }

        return true
    }

    async function onSubmit(val: any, _step: string) {
        const step = configRef.current.flow[_step]

        const valueToSubmit = step.customInput ? customInputValue : val;

        if (!valueToSubmit || (typeof valueToSubmit === 'string' && valueToSubmit.trim() === '')) {
            addMessageData('message', '⚠️ Please provide input before submitting', _step)
            return
        }

        if (step.validation) {
            if (await validate(valueToSubmit, _step) != true) {
                return
            }
        }

        const nextStep = (typeof step.next === 'function' ? step.next(valueToSubmit) : step.next) || ""

        addMessageData('user', Array.isArray(valueToSubmit) ? valueToSubmit.join(", ") : valueToSubmit, _step)

        setMessageData(prev => prev.map(msg =>
            (msg.type === 'singleChoice' || msg.type === 'multiChoice')
                ? { ...msg, disabled: true }
                : msg
        ))

        setInput('')
        setCustomInputValue('')
        setHasSelection(false)
        setIsChoiceInput(false)

        setTimeout(() => {
            setCurrentStep(nextStep)
            addMessage(nextStep)
        }, 300)
    }

    function addMessageData(type: MessageType['type'], content: any, step: string, disabled?: boolean) {
        const newMessage: MessageType = {
            id: messageIdCounter.current++,
            type,
            content,
            step,
            disabled,
            timestamp: Date.now() // Add timestamp
        }
        setMessageData(prev => [...prev, newMessage])
    }

    function addMessage(_step: string) {
        const step = configRef.current.flow[_step]

        const hasCustomInput = !!step.customInput;
        const isChoiceStep = !!step.options || !!step.multiOptions;

        if (step.inputboxHide) {
            if (inputbtndiv.current) inputbtndiv.current.style.display = "none";
        } else {
            if (inputbtndiv.current) inputbtndiv.current.style.display = "flex";
        }

        if (!isChoiceStep) {
            setInput('')
            setIsChoiceInput(false)
            setHasSelection(false)
        }

        addMessageData('loader', null, _step)

        setTimeout(() => {
            setMessageData(prev => {
                const withoutLoader = prev.slice(0, -1);

                if (step.render) {
                    return [...withoutLoader, {
                        id: messageIdCounter.current++,
                        type: 'custom',
                        content: step.render((val: any) => onSubmit(val, _step)),
                        step: _step,
                        timestamp: Date.now()
                    }]
                } else {
                    if (step.options) {
                        return [...withoutLoader, {
                            id: messageIdCounter.current++,
                            type: 'singleChoice',
                            content: { message: step.message, items: step.options },
                            step: _step,
                            timestamp: Date.now()
                        }]
                    }
                    else if (step.message && !step.multiOptions) {
                        return [...withoutLoader, {
                            id: messageIdCounter.current++,
                            type: 'message',
                            content: step.message,
                            step: _step,
                            timestamp: Date.now()
                        }]
                    }
                    if (step.multiOptions) {
                        return [...withoutLoader, {
                            id: messageIdCounter.current++,
                            type: 'multiChoice',
                            content: { message: step.message, items: step.multiOptions },
                            step: _step,
                            timestamp: Date.now()
                        }]
                    }
                }
                return withoutLoader
            })

            if (step.autoNext) {
                const nextStep = (typeof step.next === 'function' ? step.next('') : step.next) || ''
                setCurrentStep(nextStep);
                addMessage(nextStep)
            }
        }, step.delay || 0)
    }

    function reload() {
        onChatReload && onChatReload()
        setMessageData([])
        setInput('')
        setCustomInputValue('')
        setHasSelection(false)
        setIsChoiceInput(false)
        messageIdCounter.current = 0
        setCurrentStep(configRef.current.initialStep)
        addMessage(configRef.current.initialStep)


    }

    const renderMessage = (message: MessageType) => {
        switch (message.type) {
            case 'loader':
                return <Loader key={message.id} image={configRef.current.image!} primaryColor={primaryColor} />
            case 'user':
                return <UserMessage key={message.id} msg={message.content} primaryColor={primaryColor} />
            case 'message':
                return <Message key={message.id} message={message.content} image={configRef.current.image!} timestamp={message.timestamp!} />
            case 'singleChoice':
                return (
                    <SingleChoice
                        key={message.id}
                        message={message.content.message}
                        image={configRef.current.image!}
                        items={message.content.items}
                        onSelection={(val) => handleChoiceSelection(val, message.id)}
                        isDisabled={message.disabled}
                        selectedValue={message.selectedValue}
                        primaryColor={primaryColor}
                        timestamp={message.timestamp!}
                    />
                )
            case 'multiChoice':
                return (
                    <MultiChoice
                        key={message.id}
                        message={message.content.message}
                        image={configRef.current.image!}
                        items={message.content.items}
                        onSelection={(val) => handleChoiceSelection(val, message.id)}
                        isDisabled={message.disabled}
                        selectedValue={message.selectedValue}
                        primaryColor={primaryColor}
                        timestamp={message.timestamp!}
                    />
                )
            case 'custom':
                return (
                    <CustomComponent
                        key={message.id}
                        component={message.content}
                        image={configRef.current.image!}
                        timestamp={message.timestamp!}
                    />
                )
            default:
                return null
        }
    }

    const isMounted = useRef(false);
    useEffect(() => {
        if (!isMounted.current) {
            if (configRef.current.defaultOpen?.open) {
                setTimeout(() => setOpen(true), configRef.current.defaultOpen?.delay || 0)
            }
            addMessage(currentStep)
            isMounted.current = true
        }
    }, [])

    useEffect(() => {
        configRef.current = config
    }, [config])

    useEffect(() => {
        const viewport = scrollViewportRef.current;
        const lastItem = lastItemRef.current
        if (viewport && lastItem) {
            viewport.scrollTo({
                top: lastItem.offsetTop - viewport.offsetTop,
                behavior: "smooth",
            });
        }
    }, [messageData])

    const currentStepConfig = configRef.current.flow[currentStep]
    const hasCustomInput = !!currentStepConfig?.customInput
    const isChoiceStep = !!currentStepConfig?.options || !!currentStepConfig?.multiOptions

    const isInputDisabled =
        currentStepConfig?.inputboxDisabled === true ||
        hasCustomInput

    const shouldBeReadOnly = isChoiceStep && isChoiceInput

    const customInputReady = customInputValue !== '' && customInputValue !== null && customInputValue !== undefined &&
        (typeof customInputValue !== 'string' || customInputValue.trim() !== '')

    const isSubmitDisabled =
        (isChoiceStep && !hasSelection) ||
        (!isChoiceStep && !hasCustomInput && input.trim() === '') ||
        (hasCustomInput && !customInputReady)

    return (
        <div className="fixed z-100 bottom-5 right-5 sm:bottom-10 sm:right-10">
            <div className="relative">
                <button id="chatbot-trigger" className="flex items-center gap-4 " onClick={() => setOpen(true)}>
                    {configRef.current.tooltip &&
                        <div className="bg-background p-2 shadow border rounded-xl rounded-br-none max-w-64">{configRef.current.tooltip}</div>
                    }
                    <img src={configRef.current.image} alt={configRef.current.image} className="w-16 h-16 object-cover rounded-full border border-primary cursor-pointer" />
                </button>
                <Card className={cn("absolute right-0 bottom-0 h-[75vh] max-h-[600px] w-[calc(100vw-40px)] py-0 gap-0 sm:w-96 rounded-2xl overflow-hidden flex flex-col duration-300", open && "animate-in zoom-in slide-in-from-bottom slide-in-from-right", open ? '' : 'hidden')}>
                    <div className="text-primary-foreground px-4 py-3 flex justify-between items-center " style={{ backgroundColor: primaryColor }}>
                        <div className="flex gap-3 items-center ">
                            <img src={configRef.current.image} className="w-10 h-10 rounded-full" alt="chatbot-avtar" />
                            <div>
                                <div className="font-medium">{configRef.current.name}</div>
                                <div className="text-xs opacity-80 flex items-center gap-1">
                                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                    Usually reply time: 30 to 60 Seconds
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-1">
                            <button className="hover:bg-primary-foreground hover:text-black rounded-full duration-300 p-1"
                                onClick={() => reload()}
                            >
                                <RefreshCcw size={20} />
                            </button>
                            <button className="hover:bg-primary-foreground hover:text-black rounded-full duration-300 p-1"
                                onClick={handlechatbotclose}
                            >
                                <Cross2Icon width={20} height={20} />
                            </button>
                        </div>
                    </div>
                    <ScrollAreaPrimitive.Root className="relative overflow-hidden grow bg-white">
                        <ScrollAreaPrimitive.Viewport ref={scrollViewportRef} className="h-full w-full rounded-[inherit] px-4 py-3">
                            {messageData.map((message, index) => (
                                <div ref={index === messageData.length - 1 ? lastItemRef : null} key={message.id}>
                                    {renderMessage(message)}
                                </div>
                            ))}
                        </ScrollAreaPrimitive.Viewport>
                        <ScrollAreaPrimitive.Scrollbar orientation="vertical" />
                        <ScrollAreaPrimitive.Corner />
                    </ScrollAreaPrimitive.Root>
                    <div className="border-t bg-white p-3">
                        <div className="flex gap-2 items-center" ref={inputbtndiv}>
                            {hasCustomInput ? (
                                <CustomInput
                                    customInput={currentStepConfig.customInput!}
                                    value={customInputValue}
                                    onChange={handleCustomInputChange}
                                    onSubmit={(val) => onSubmit(val, currentStep)}
                                />
                            ) : (
                                <Input
                                    type='text'
                                    ref={inputRef}
                                    className="flex-1 rounded-md border-gray-300 h-12"
                                    value={input}
                                    onChange={e => {
                                        if (!shouldBeReadOnly) {
                                            setInput(e.target.value)
                                        }
                                    }}
                                    onKeyDown={(e) => {
                                        if (e.key === 'Enter' && !isSubmitDisabled) {
                                            e.preventDefault();
                                            onSubmit(input, currentStep);
                                        }
                                        if (shouldBeReadOnly && e.key !== 'Enter' && e.key !== 'Tab') {
                                            e.preventDefault();
                                        }
                                    }}
                                    placeholder={
                                        isChoiceStep
                                            ? (hasSelection ? "Ready to submit" : "Select options above")
                                            : "Type your answer..."
                                    }
                                    style={{
                                        cursor: shouldBeReadOnly ? 'default' : 'text',
                                        backgroundColor: shouldBeReadOnly ? '#f9fafb' : 'white'
                                    }}
                                    disabled={isInputDisabled}
                                    readOnly={shouldBeReadOnly}
                                />
                            )}
                            <Button
                                className="rounded-full w-10 h-10 p-0 hover:opacity-90 disabled:bg-gray-300 cursor-pointer"
                                style={{ backgroundColor: primaryColor }}
                                onClick={() => onSubmit(hasCustomInput ? customInputValue : input, currentStep)}
                                disabled={isSubmitDisabled}
                            >
                                <PaperPlaneIcon />
                            </Button>
                        </div>
                        <div className="flex items-center justify-center gap-2 text-sm mt-2 text-gray-500">
                            <img src={favicon} className="w-4" alt={`${brandName}/chatbot`} />
                            {brandName}
                        </div>
                    </div>
                </Card>
            </div>
        </div>
    )
}