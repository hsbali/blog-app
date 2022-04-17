import cx from "classnames";

import useScrollPosition from "../../hooks/useScrollPosition"

export default function HeaderNav() {
    const scrollPosition = useScrollPosition();

    return (
        <>
            <header>
                {/* <div className={cx({ "h-16": scrollPosition > 64 })}></div> */}
                <div className={cx("h-16 fixed w-full top-0", {"bg-black/90": scrollPosition > 64 })}>
                    <nav className="flex items-center container mx-auto h-full">
                        <div>
                            <div className="text-3xl font-bold">Logo</div>
                            {/* @todo - Logo Image with Image Optimization */}
                        </div>
                    </nav>
                </div>
            </header>
        </>
    )
}