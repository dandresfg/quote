import { useState } from 'react'
import { Popover } from '@mui/material';
import { ColorResult, TwitterPicker } from 'react-color';
import { ChildrenProps } from '../types';

interface ColorPickerProps extends ChildrenProps {
    color: string,
    onChange: (s: string) => void
}

const ColorPicker = ({ children, color, onChange }: ColorPickerProps) => {
    const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

    const onColorChange = (color: ColorResult) => onChange(color.hex);
    const onOpen = (evt: React.MouseEvent<HTMLDivElement>) => setAnchorEl(evt.currentTarget);
    const onClose = () => setAnchorEl(null);

    return (
        <>
            <div className="color-menu" onClick={onOpen}>
                {children}
            </div>
            <Popover
                id="picker-popover"
                open={Boolean(anchorEl)}
                anchorEl={anchorEl}
                onClose={onClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
            >
                <TwitterPicker color={color} onChange={onColorChange} />
            </Popover>
        </>
    )
}

export default ColorPicker