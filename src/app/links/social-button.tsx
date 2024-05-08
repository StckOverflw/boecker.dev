"use client"

import Button from "@/components/ui/button";

export default function SocialButton({ text, link, icon }: { text: string, link: string, icon: React.ReactNode }) {
    return (
        <Button style="filled" href={link} className="w-full">
            <div className="w-16 float-left my-auto">
                {icon}
            </div>
            <p className="w-full text-center my-auto">{text}</p>
        </Button>
    )
}