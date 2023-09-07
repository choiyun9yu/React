# Dropdown 1

[ref](https://tech.ozys.io/2022/02/24/dropdown-animation.html)

### ~/src/components/Dropdown.js

    import React from 'react';

    const Dropdown = (props) => {
        const [visibilityAnimation, setVisibilityAnimation] = React.useState(false);
        React.useEffect(() => {
            if (props.visibility) {
                setVisibilityAnimation(true);
            } else {
                setTimeout(() => {
                    setVisibilityAnimation(false);
                }, 400);
            }
        }, [props.visibility]);

        // visivility가 true가 되었을때, 기전에 설정한 timeout 콜백을 제거하도록 코드 수정
        // const [visibilityAnimation, setVisibilityAnimation] = React.useState(false);
        // const [repeat, setRepeat] = React.useState(undefined);

        // React.useEffect(() => {
        //     if (props.visibility) {
        //         clearTimeout(repeat);
        //         setRepeat(undefined);
        //         setVisibilityAnimation(true);
        //     } else {
        //         setRepeat(
        //             setTimeout(() => {
        //                 setVisibilityAnimation(false);
        //             }, 400)
        //         );
        //     }
        // }, [props.visibility]);

        return (
            <article
                className={`components-dropdown ${props.visibility ? 'slide-fade-in-dropdown' : 'slide-fade-out-dropdown'}`}
            >
                {visibilityAnimation && props.children}
            </article>
        );
    };

    export default Dropdown;

### ~/src/App.js

    import React from 'react';
    import './App.css';
    import Dropdown from './components/Dropdown';

    const App = (props) => {
        const [dropdownVisibility, setDropdownVisibility] = React.useState(false);

        return (
            <div id="app">
                <h1>Dropdown component</h1>
                <button onClick={(e) => setDropdownVisibility(!dropdownVisibility)}>
                    {dropdownVisibility ? 'Close' : 'Open'}
                </button>

                <Dropdown visibility={dropdownVisibility}>
                    <ul>
                        <li>item 1</li>
                        <li>item 2</li>
                        <li>item 3</li>
                        <li>item 4</li>
                    </ul>
                </Dropdown>
            </div>
        );
    };

    export default App;

### ~/src/App.css

    @keyframes App-logo-spin {
        from {
            transform: rotate(0deg);
        }
        to {
            transform: rotate(360deg);
        }
    }

    /* 드롭다운 fade in */
    @keyframes slide-fade-in-dropdown-animation {
        0% {
            transform: translateY(-100%);
        }

        100% {
            transform: translateY(0);
        }
    }

    .slide-fade-in-dropdown {
        overflow: hidden;
    }

    /* 여기 예제에서는 자식태그 ul을 줬는데 상황에 따라 다름 */
    .slide-fade-in-dropdown > ul {
        animation: slide-fade-in-dropdown-animation 0.4s ease;
    }

    /* 드롭다운 fade out */
    @keyframes slide-fade-out-dropdown-animation {
        0% {
            transform: translateY(0);
        }

        100% {
            transform: translateY(-100%);
        }
    }

    .slide-fade-out-dropdown {
        overflow: hidden;
    }

    .slide-fade-out-dropdown > ul {
        animation: slide-fade-out-dropdown-animation 0.4s ease;
        animation-fill-mode: forwards;
    }

    .components-dropdown > ul {
        position: relative;
        top: 5px;
        margin-top: 0;
        margin-bottom: 5px;
        padding-left: 0;
        list-style: none;
    }
