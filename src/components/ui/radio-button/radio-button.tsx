import styles from './radio-button.module.scss'

type RadioButtonProps = {
  label: string
  value: string
  onChange?: (value: string) => void
  checked?: boolean
}

const RadioButton = ({ label, value, onChange, checked=false }: RadioButtonProps) => {
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange && onChange(e.target.value);
  }

  return (
    <label className={`${styles.radio_button} p-4 sm:p-5 transition-colors ${checked ? "text-h bg-mainAdditional" : "text-txt bg-tertiary"}`}>
      <span className='relative'>
        <input className={styles.radio_button_input} type="radio" value={value} onChange={handleOnChange} checked={checked}/>
        <span className='flex'>
          {
            checked ? (
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Icon">
                <path id="Outer Circle" d="M31.25 16.6001C31.25 25.0224 24.4223 31.8501 16 31.8501C7.57766 31.8501 0.75 25.0224 0.75 16.6001C0.75 8.17775 7.57766 1.3501 16 1.3501C24.4223 1.3501 31.25 8.17775 31.25 16.6001Z" stroke="#282034" strokeWidth="1.5"/>
                <circle id="Inside Circle" cx="16.0016" cy="16.6002" r="6.4" fill="#282034"/>
                </g>
              </svg>
            ) : (
              <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="Icon">
                <path id="Outer Circle" d="M31.25 16.6001C31.25 25.0224 24.4223 31.8501 16 31.8501C7.57766 31.8501 0.75 25.0224 0.75 16.6001C0.75 8.17775 7.57766 1.3501 16 1.3501C24.4223 1.3501 31.25 8.17775 31.25 16.6001Z" stroke="#8979AA" strokeWidth="1.5"/>
                </g>
              </svg>
            )
          }
        </span>
      </span>
      <span className={styles.radio_button_label}>{ label }</span>
    </label>
  )
}

export default RadioButton;
