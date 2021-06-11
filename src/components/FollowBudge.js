import React from "react"
import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"

const Follow = styled.div`
  margin-top: 2em;
  text-align: left;
`

const FollowLink = styled.a`
  display: inline-flex;
  align-items: center;
  background: #20a8ea;
  color: #fff;
  padding: 0;
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
  .follow-link-text {
    padding: 5px 7px;
    background: ${props => props.theme.colors.pineappleBlue};
    color: ${props => props.theme.colors.litegray};
    font-size: 14px;
    transition: 0.2s;
  }
  &:hover .follow-link-text {
    background: #d3ebfb;
  }
`
const Twitter = styled(FontAwesomeIcon)`
  width: 1.6em;
  height: 1.6em;
  margin: 0 10px;
`

const Followbudge = () => {
  return (
    <Follow>
      <FollowLink href="https://twitter.com/JP_waikiki_130" rel="nofollow">
        <Twitter icon={faTwitter} />
        <div className="follow-link-text">@JP_waikiki_130をフォロー</div>
      </FollowLink>
    </Follow>
  )
}

export default Followbudge
