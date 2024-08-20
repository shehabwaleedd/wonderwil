'use client'
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie';
import { toast } from 'sonner';

interface AccessContextType {
    hasAccess: boolean;
    navOpen: boolean;
    setNavOpen: any;
    checkCode: (code: string) => boolean;
}

const AccessContext = createContext<AccessContextType | undefined>(undefined);

export const AccessProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [hasAccess, setHasAccess] = useState<boolean>(false);
    const [navOpen, setNavOpen] = useState<boolean>(false);


    useEffect(() => {
        const accessToken = Cookies.get('access_token');
        setHasAccess(!!accessToken);
    }, []);


    const checkCode = (code: string) => {
        if (code === 'wonderwilAccessCode^@#$AS@!as1o0ocax') {
            Cookies.set('access_token', 'granted', { expires: 30 });
            setHasAccess(true);
            return true;
        }
        toast.error('Invalid access code');
        return false;
    };

    return (
        <AccessContext.Provider value={{ hasAccess, checkCode, navOpen, setNavOpen }}>
            {children}
        </AccessContext.Provider>
    );
};

export const useAccess = () => {
    const context = useContext(AccessContext);
    if (context === undefined) {
        throw new Error('useAccess must be used within an AccessProvider');
    }
    return context;
};