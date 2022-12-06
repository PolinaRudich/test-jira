import './Toggle.scss';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store/store';
export type ToggleProps = {
    priority: string;
    changePriority: (priority: string) => void;
}
export const Toggle = (props: ToggleProps) => {

    return (
        <div className="toggle" onClick={() => props.changePriority(props.priority === '1' ? '0' : '1')}>
            <div className={`toggle-container ${props.priority === '0' ? 'dark-theme' : ''}`}>
                <p style={{ opacity: props.priority === '0' ? '1' : '0', marginLeft: '10px' }}>low</p>
                <p style={{ opacity: props.priority === '0' ? '0' : '1' }}>high</p>
            </div>
        </div>
    );
};