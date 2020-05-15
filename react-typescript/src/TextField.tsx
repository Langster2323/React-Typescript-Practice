import React, {useState, useRef} from 'react';


interface Person {
    firstName: string
    lastName: string
}

interface Props {
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => string;
    person: Person;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode {
    text: string
}

export const TextField: React.FC<Props> = () => {
    const [count, setCount] = useState<TextNode>({text: 'hello'});
    const inputRef = useRef<HTMLInputElement>(null);
    const divtRef = useRef<HTMLDivElement>(null);
    return (
        <div ref={divtRef}>
            <input ref={inputRef} />
        </div>
    )
}