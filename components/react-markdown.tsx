

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm'

interface MMProps {
    markdown: string;
    className?: string;
};

const MM: React.FC<MMProps> = ({ markdown, className }) => {
    console.log(markdown);
    return <Markdown className={`${className}`} remarkPlugins={[remarkGfm]}>{`${markdown}`}</Markdown >
};

export default MM;
