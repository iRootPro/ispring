import React, {useEffect, useRef} from 'react';
import styles from './styles.module.css'
import {useDispatch, useSelector} from "react-redux";
import {removeSelectShape, setContextCanvas, setSelectShapeID, shapesType} from "../../reducers/draw-reducer";
import {RootStateType} from "../../app/store";

const RightSide = () => {
        const dispatch = useDispatch()
        const ctx = useSelector<RootStateType, CanvasRenderingContext2D | null>(state => state.draw.ctx)
        const shapes = useSelector<RootStateType, Array<shapesType>>(state => state.draw.shapes)
        const canvasRef = useRef<HTMLCanvasElement>(null)
        let dragShape: shapesType | null = null
        let selectId: null | number
        let startX: number | null = null
        let startY: number | null = null


        const draw = () => {
            if (!ctx) return
            ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height)
            const border = 2
            shapes.map(shape => {
                switch (shape.type) {
                    case "rectangle": {
                        ctx.beginPath()
                        ctx.fillStyle = shape.color
                        ctx.fillRect(shape.x, shape.y, shape.w, shape.h)
                        ctx.stroke()
                        if (dragShape?.id === shape.id) {
                            ctx.setLineDash([10])
                            ctx.strokeStyle = 'blue'
                            ctx.rect(shape.x - border, shape.y - border, shape.w + border * 2, shape.h + border * 2)
                            ctx.stroke()
                        }
                        ctx.closePath()
                        ctx.save()
                        break
                    }
                    case "triangle": {
                        ctx.beginPath()
                        ctx.moveTo(shape.x, shape.y - 50)
                        ctx.lineTo(shape.x - 50, shape.y + 50)
                        ctx.lineTo(shape.x + 50, shape.y + 50)
                        ctx.fillStyle = shape.color
                        ctx.fill()
                        ctx.closePath()
                        ctx.save()
                        if (dragShape?.id === shape.id) {
                            ctx.setLineDash([10])
                            ctx.strokeStyle = 'blue'
                            ctx.strokeRect(shape.x - 50 - border, shape.y - 50 - border, 100 + border * 2, 100 + border * 2)
                        }
                        break
                    }
                    default: {
                        return
                    }
                }
            })
        }

        useEffect(() => {
            if (canvasRef.current) {
                const canvas = canvasRef.current
                canvas.width = canvas.clientWidth
                canvas.height = canvas.clientHeight
                const ctx = canvas.getContext('2d')
                if (ctx) {
                    dispatch(setContextCanvas(ctx))
                }
            }
        }, [])

        useEffect(() => {
            draw()
        }, [shapes])

        const checkShapes = (x: number | null, y: number | null) => {
            let isTarget = false
            shapes.map(shape => {
                switch (shape.type) {
                    case "triangle": {
                        if (!x || !y) return
                        //http://www.blackpawn.com/texts/pointinpoly/default.html
                        const ax = shape.x
                        const ay = shape.y - 50
                        const bx = shape.x - 50
                        const by = shape.y + 50
                        const cx = shape.x + 50
                        const cy = shape.y + 50
                        const px = x
                        const py = y
                        const v0 = [cx - ax, cy - ay];
                        const v1 = [bx - ax, by - ay];
                        const v2 = [px - ax, py - ay];

                        const dot00 = (v0[0] * v0[0]) + (v0[1] * v0[1]);
                        const dot01 = (v0[0] * v1[0]) + (v0[1] * v1[1]);
                        const dot02 = (v0[0] * v2[0]) + (v0[1] * v2[1]);
                        const dot11 = (v1[0] * v1[0]) + (v1[1] * v1[1]);
                        const dot12 = (v1[0] * v2[0]) + (v1[1] * v2[1]);

                        const invDenom = 1 / (dot00 * dot11 - dot01 * dot01);

                        const u = (dot11 * dot02 - dot01 * dot12) * invDenom;
                        const v = (dot00 * dot12 - dot01 * dot02) * invDenom;

                        const isTriangleInside = ((u >= 0) && (v >= 0) && (u + v < 1))
                        if (isTriangleInside) {
                            dragShape = shape
                            isTarget = true
                        }
                        break
                    }
                    case 'rectangle': {
                        if (!x || !y) return;
                        if (x >= shape.x && x <= shape.x + shape.w && y >= shape.y && y <= shape.y + shape.h) {
                            dragShape = shape
                            isTarget = true
                            break
                        }
                    }
                }
            })
            return isTarget
        }

        const handleMouseDown = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
            if (!ctx) return
            startX = e.nativeEvent.offsetX - ctx.canvas.clientLeft
            startY = e.nativeEvent.offsetY - ctx.canvas.clientTop
            checkShapes(startX, startY)
            if (dragShape) {
                selectId = dragShape.id
                dispatch(setSelectShapeID(dragShape.id))
                draw()
            } else {
                selectId = null
                dispatch(setSelectShapeID(null))
                draw()
            }
        }

        const handleMouseMove = (e: React.MouseEvent<HTMLCanvasElement, MouseEvent>) => {
            if (!ctx) return
            if (!dragShape) return
            const mouseX = e.nativeEvent.offsetX - ctx.canvas.clientLeft
            const mouseY = e.nativeEvent.offsetY - ctx.canvas.clientTop
            if (startX && startY) {
                const dx = mouseX - startX
                const dy = mouseY - startY
                startX = mouseX
                startY = mouseY
                dragShape.x += dx
                dragShape.y += dy
                draw()
            }
        }

        const handleOnMouseUp = () => {
            dragShape = null
        }

        const handleOnMouseOut = () => {
            handleOnMouseUp()
        }

        const handlePressKey = (e: React.KeyboardEvent) => {
            if (!selectId) return
            if (e.key === 'Delete') {
                dispatch(removeSelectShape(selectId))
            }
        }

        return (
            <div className={styles.rightSide}>
                <canvas
                    tabIndex={0}
                    onKeyDown={(e: React.KeyboardEvent) => handlePressKey(e)}
                    className={styles.canvas}
                    ref={canvasRef}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleOnMouseUp}
                    onMouseOut={handleOnMouseOut}
                />
            </div>
        );
    }
;

export default RightSide;
