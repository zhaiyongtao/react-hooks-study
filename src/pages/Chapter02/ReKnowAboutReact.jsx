/**
 * ReKnowAboutReact - 重新认识React demo
 * @Author: BuzzLightyear.Z
 * @Email: whoami_Z@outlook.com
 * @Date: 2021年10月26日22:40:45
 * @LastEditTime: 2021年10月26日22:40:51
 */
import React, {useEffect, useState} from 'react'
const useWindowReSize = (props) => {
    const [currentWidth , setCurrentWidth] = useState(0)
    const {currentDom} = props;
    useEffect(() => {
        window.addEventListener('resize' , handleResizeWindow)
        return () => {
            window.removeEventListener('resize', handleResizeWindow)
        }
    }, [])

    const handleResizeWindow = () => {
        const _width = currentDom ?currentDom.clientWidth : window.innerWidth
        const _heignt = currentDom.clientHeight || window.innerHeight;
        if (_width > _heignt) {
            setCurrentWidth(_heignt)
        } else{
            setCurrentWidth(_heignt)
        }
    }

    return currentWidth
}

export default useWindowReSize