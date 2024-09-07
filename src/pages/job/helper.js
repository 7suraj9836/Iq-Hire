import { toast } from 'react-toastify';

export const handleCopyContent = (vacancyTextData,contentRef2) => {
    let contentToCopy = '';

    for (const [key, value] of Object.entries(vacancyTextData)) {
        if (key === 'Job_Title') {
            contentToCopy += `Job Title: ${value}\n\n`;
        } else if (key === 'Trending_Titles') {
            contentToCopy += `Trending Titles:\n`;
            for (const [title, description] of Object.entries(value)) {
                contentToCopy += `  - ${title}: ${description}\n`;
            }
            contentToCopy += '\n';
        } else if (key === 'Elements_of_values' || key === 'neuromarketing_principles') {
            contentToCopy += `${key.replace(/_/g, ' ')}:\n`;
            value.forEach((item) => {
                for (const [subKey, subValue] of Object.entries(item)) {
                    contentToCopy += `  - ${subKey}: ${subValue}\n`;
                }
            });
            contentToCopy += '\n';
        } else if (key === 'Tone_of_voice') {
            // Skip Tone_of_voice in this section
            continue; // corrected by using `continue` properly in this loop
        } else if (typeof value === 'object' && !Array.isArray(value)) {
            contentToCopy += `${key.replace(/_/g, ' ')}:\n`;
            for (const [subKey, subValue] of Object.entries(value)) {
                contentToCopy += `  - ${subKey}:\n`;
                subValue.forEach((item) => {
                    contentToCopy += `    * ${item}\n`;
                });
            }
            contentToCopy += '\n';
        } else if (Array.isArray(value)) {
            contentToCopy += `${key.replace(/_/g, ' ')}:\n`;
            value.forEach((item) => {
                contentToCopy += `  - ${item}\n`;
            });
            contentToCopy += '\n';
        } else {
            contentToCopy += `${key.replace(/_/g, ' ')}: ${value}\n\n`;
        }
    }

    const content2 = contentRef2?.current?.innerText; // Assuming contentRef2 refers to additional content
    const combinedContent = `${contentToCopy}\n${content2}`;

    navigator.clipboard.writeText(combinedContent)
        .then(() => {
            toast.success("Copied to clipboard");
            console.log('Content copied to clipboard successfully!');
        })
        .catch(err => {
            console.error('Failed to copy content: ', err);
        });
};