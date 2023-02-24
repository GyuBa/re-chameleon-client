import {CSSProperties, ReactNode} from "react";

type HeaderData = {
  category?: string;
  title?: string;
}

type DefaultButtonData = {
  style?: CSSProperties | undefined,
  className?: string,
  icon?: ReactNode,
  text?: string,
}

type SubmitButtonData = {
  style?: CSSProperties | undefined,
  className?: string,
  icon?: ReactNode,
  text?: string,
  onClick?: Promise<void> | any,
  Event?: JSX.Element | any,
} // onClick, Event type 수정 필요

// WebSocketData type 수정 필요
type WebSocketData = {
  message?: any,
  icon?: ReactNode,
  bgColor?: string,
  color?: string,
  bgHoverColor?: string,
  size?: string,
  text?: string,
  borderRadius?: string,
  width?: string,
  Event?: any
}

export type {HeaderData, DefaultButtonData, SubmitButtonData, WebSocketData};