import React from 'react'

export const ProgressBar = () => {
    const [startTransition, setStartTransition] = React.useState(false)

    React.useEffect(() => { 
        if (startTransition) return

        setStartTransition(true)
    })

  return (
    <div className="bar">
        <div className={`bar-content ${startTransition? ' bar-transition': ''}`}></div>
    </div>
  )
}