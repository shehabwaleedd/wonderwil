'use client'
import React, { useState } from 'react';
import { useAccess } from '@/context/AccessContext';
import Image from 'next/image';
import styles from "./page.module.scss"
import { useRouter } from 'next/navigation';
const AccessPage: React.FC = () => {
    const [code, setCode] = useState('');
    const { checkCode, hasAccess } = useAccess();
    const router = useRouter();
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (checkCode(code)) {
            router.push('/');
        }
    };


    if (hasAccess) {
        return null;
    }



    return (
        <div className={styles.access}>
            <Image src="/intro.png" alt="Wonderwil" width={500} height={500} />
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Enter your access code"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default AccessPage;