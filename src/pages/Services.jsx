import { useDispatch } from "react-redux";
import CircleLogo from "../components/atom/CircleLogo";
import Title from "../components/atom/Title";
import Card from "../components/Card";
import CardTitle from "../components/atom/CardTitle";
import CardDescription from "../components/atom/CardDescription";
import { useEffect, useRef, useState } from "react";
import { setReference } from "../store/metadata";
import config from "../helpers/config";
import { FONT_FAMILY, LIGHT_GRAY, SERVICE, GRAY } from "../helpers/constants";
import { useTheme } from "../contexts/ThemeContext";


const Services = () => {
    const serviceRef = useRef(null)
    const dispatch = useDispatch()
    const { services } = config
    const { theme } = useTheme()
    const [hoveredCard, setHoveredCard] = useState(null)

    useEffect(() => {
        dispatch(setReference({name: 'service', value: serviceRef }))
    }, [dispatch])

    return (
        <div 
            ref={serviceRef}
            className={`flex flex-col items-center pt-10 pb-10`}
            style={{
                background: 'var(--color-secondary)',
                backdropFilter: 'blur(10px)',
                transition: 'var(--theme-transition)'
            }}>

            <div className="w-full flex items-center mb-4 px-8">
                <div className="h-[3px] w-[30px] bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-accent)] mr-4 rounded-full"></div>
                <Title label={SERVICE} style={{color: 'var(--color-primary)'}}/>
                <div className="h-[3px] flex-grow bg-gradient-to-r from-[var(--color-accent)] to-transparent ml-4 rounded-full"></div>
            </div>
            
            <div className="grid grid-rows sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8 mx-8">
                { 
                    services?.map(({ logo, title, description }, key) => (
                        <div 
                            key={key}
                            className="relative transition-all duration-300 transform hover:scale-105"
                            onMouseEnter={() => setHoveredCard(key)}
                            onMouseLeave={() => setHoveredCard(null)}
                        >
                            {/* Card accent lighting */}
                            <div 
                                className={`absolute -inset-1 rounded-xl opacity-70 blur-md transition-all duration-300 ${hoveredCard === key ? 'opacity-100' : 'opacity-50'}`}
                                style={{
                                    background: `linear-gradient(135deg, var(--color-primary), var(--color-accent))`,
                                }}
                            ></div>
                            
                            <Card 
                                className={'relative p-6 grid items-start place-items-center max-w-xs rounded-lg overflow-hidden backdrop-blur-sm z-10'} 
                                style={{
                                    background: 'var(--color-secondary)',
                                    borderTop: '1px solid rgba(255, 255, 255, 0.3)',
                                    borderLeft: '1px solid rgba(255, 255, 255, 0.3)',
                                    boxShadow: hoveredCard === key ? 
                                        `0 15px 30px rgba(var(--color-primary-rgb), 0.2), 0 5px 15px rgba(var(--color-primary-rgb), 0.1)` :
                                        `0 8px 20px rgba(0, 0, 0, 0.1)`,
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                <div 
                                    className="p-4 rounded-full mb-4"
                                    style={{
                                        background: hoveredCard === key ? 
                                            `linear-gradient(135deg, var(--color-primary), var(--color-accent))` : 
                                            'rgba(var(--color-primary-rgb), 0.1)',
                                        transition: 'all 0.3s ease'
                                    }}
                                >
                                    <CircleLogo name={logo} />
                                </div>
                                <CardTitle 
                                    label={title} 
                                    className="font-bold tracking-wide mb-3 text-center text-lg"
                                    style={{
                                        color: 'var(--color-primary)',
                                        fontFamily: FONT_FAMILY,
                                        letterSpacing: '2px',
                                        transition: 'var(--theme-transition)'
                                    }}
                                />
                                <CardDescription 
                                    className="text-center px-2" 
                                    label={description}
                                    style={{
                                        color: 'var(--color-primary)',
                                        opacity: 0.7,
                                        fontFamily: FONT_FAMILY,
                                        letterSpacing: '0.5px',
                                        lineHeight: '1.6',
                                        transition: 'var(--theme-transition)'
                                    }}
                                />
                            </Card>
                        </div>
                    )) 
                }
            </div>
        </div>
    )
}

// Styles now incorporated inline with theme variables

export default Services;