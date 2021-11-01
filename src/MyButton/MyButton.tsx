import React, { FC } from "react";

export interface MyButtonProps{
    color: string;
    big: boolean;
}

const MyButton: FC<MyButtonProps> = ({

                                        children,
                                        color,
                                        big,
                                        ...props
                                    }) => {
    return (
        <button {...props} style={{ color }}>
            {children}
        </button>
    )
}

export default MyButton