import "./style.css";
import React from "react";
import ReactTooltip from "react-tooltip";

import NintendoLogo from "../../images/platform_logo/nintendo.png";
import PlayStationLogo from "../../images/platform_logo/logo copy.png";
import AppleLogo from "../../images/platform_logo/1000px-Apple_logo_black.svg.png";
import PlaystoreLogo from "../../images/platform_logo/playstore-512.png";
import XboxLogo from "../../images/platform_logo/xbox (1).png";
import WindowsLogo from "../../images/platform_logo/logo.png";
import LinuxLogo from "../../images/platform_logo/linux.png";

import TOA from "../../images/game_logo/Talesoftheabyss_us.jpg";
import ChaosRings from "../../images/game_logo/Chaos_Rings_logo.png";
import PokemonYellow from "../../images/game_logo/Pokemon_Yellow.png";
import FGO from "../../images/game_logo/Fate_Grand_Order_logo.png";
import Nier from "../../images/game_logo/Nier_Automata_cover_art.jpg";
import SG from "../../images/game_logo/Steins;Gate_cover_art.jpg";
import Saya from "../../images/game_logo/Saya_no_Uta_cover.jpg";
import Koi from "../../images/game_logo/1515037475950.jpg";
import ProjectDiva from "../../images/game_logo/Hatsune_Miku_Project_DIVA_Logo.png";
import LoveLive from "../../images/game_logo/Llsiflogo.png";
import Beyond2Souls from "../../images/game_logo/Beyond_Two_Souls_final_cover.jpg"
import Detroit from "../../images/game_logo/Detroit_Become_Human.jpg";
import TLOU from "../../images/game_logo/Video_Game_Cover_-_The_Last_of_Us.jpg";
import QuantumBreak from "../../images/game_logo/quantumbreak.jpg";
import NFSMW from "../../images/game_logo/Need_for_Speed_Most_Wanted_Box_Art.jpg";
import CSGO from "../../images/game_logo/CSGO-Logo.png";
import Recoil from "../../images/game_logo/49275-recoil-windows-front-cover.jpg";
import CommandAndConquerTiberianSun from "../../images/game_logo/Cncts-win-cover.jpg";
import DeadSpace from "../../images/game_logo/Dead_Space_Box_Art.jpg";

function Tree() {
    return (
        <ul className="tree">
            <li><a>Role-Playing Game</a>
                <ul>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Tales_of_the_Abyss" target="_blank" rel="noopener noreferrer" data-tip data-for="TOA">Tales of the Abyss <img src={NintendoLogo} alt="nintendo_logo" height="38px" /> <img src={PlayStationLogo} alt="ps_logo" height="35px" /></a>
                        <ReactTooltip id="TOA" place="right" effect="float" type="light"><img src={TOA} alt="talesoftheabyss_coverimage" /></ReactTooltip>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Chaos_Rings" target="_blank" rel="noopener noreferrer" data-tip data-for="ChaosRings">Chaos Rings <img src={AppleLogo} alt="apple_logo" height="19px" /> <img src={PlaystoreLogo} alt="playstore_logo" height="19px" /></a>
                        <ReactTooltip id="ChaosRings" place="right" effect="float" type="light"><img src={ChaosRings} alt="chaosrings_coverimage" /></ReactTooltip>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Pokémon_Yellow" target="_blank" rel="noopener noreferrer" data-tip data-for="pmyellow">Pokémon Yellow <img src={NintendoLogo} alt="nintendo_logo" height="38px" /></a>
                        <ReactTooltip id="pmyellow" place="right" effect="float" type="light"><img src={PokemonYellow} alt="pokemonyellow_coverimage" /></ReactTooltip>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Fate/Grand_Order" target="_blank" rel="noopener noreferrer" data-tip data-for="fgo">Fate/Grand Order <img src={AppleLogo} alt="apple_logo" height="19px" /> <img src={PlaystoreLogo} alt="playstore_logo" height="19px" /></a>
                        <ReactTooltip id="fgo" place="right" effect="float" type="light"><img src={FGO} alt="fgo_coveriamge" /></ReactTooltip>
                    </li>
                    <li><a>Action Role-Playing Game</a>
                        <ul>
                            <li>
                                <a href="https://en.wikipedia.org/wiki/Nier:_Automata" target="_blank" rel="noopener noreferrer" data-tip data-for="nier">Nier: Automata <img src={PlayStationLogo} alt="ps_logo" height="35px" /> <img src={XboxLogo} alt="xbox_logo" height="35px" /> <img src={WindowsLogo} alt="windows_logo" height="19px" /></a>
                                <ReactTooltip id="nier" place="right" effect="float" type="light"><img src={Nier} alt="nierautomata_coverimage" /></ReactTooltip>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li><a>Visual Novel</a>
                <ul>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Steins;Gate" target="_blank" rel="noopener noreferrer" data-tip data-for="elpsycongroo">Steins;Gate <img src={PlayStationLogo} alt="ps_logo" height="35px" /> <img src={XboxLogo} alt="xbox_logo" height="35px" /> <img src={WindowsLogo} alt="windows_logo" height="19px" /> <img src={AppleLogo} alt="apple_logo" height="19px" /> <img src={PlaystoreLogo} alt="playstore_logo" height="19px" /></a>
                        <ReactTooltip id="elpsycongroo" place="right" effect="float" type="light"><img src={SG} alt="steinsgate_coverimage" /></ReactTooltip>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Saya_no_Uta" target="_blank" rel="noopener noreferrer" data-tip data-for="saya">Saya no Uta (Song of Saya) <img src={WindowsLogo} alt="windows_logo" height="19px" /></a>
                        <ReactTooltip id="saya" place="right" effect="float" type="light"><img src={Saya} alt="sayanouta_coverimage" /></ReactTooltip>
                    </li>
                    <li>
                        <a href="https://vsbattles.fandom.com/wiki/Kimi_to_Kanojo_to_Kanojo_no_Koi" target="_blank" rel="noopener noreferrer" data-tip data-for="koi">Kimi to Kanojo to Kanojo no Koi (The love between you, her and her.) <img src={WindowsLogo} alt="windows_logo" height="19px" /></a>
                        <ReactTooltip id="koi" place="right" effect="float" type="light"><img src={Koi} alt="kimitokanojotokanojonokoi_coverimage" /></ReactTooltip>
                    </li>
                </ul>
            </li>
            <li><a>Rhythm Game</a>
                <ul>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Hatsune_Miku:_Project_DIVA" target="_blank" rel="noopener noreferrer" data-tip data-for="miku">Hatsune Miku: Project DIVA <img src={NintendoLogo} alt="nintendo_logo" height="38px" /> <img src={PlayStationLogo} alt="ps_logo" height="35px" /></a>
                        <ReactTooltip id="miku" place="right" effect="float" type="light"><img src={ProjectDiva} alt="hatsunemikuprojectdiva_coverimage" /></ReactTooltip>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Love_Live!_School_Idol_Festival" target="_blank" rel="noopener noreferrer" data-tip data-for="ll">Love Live! School Idol Festival <img src={AppleLogo} alt="apple_logo" height="19px" /> <img src={PlaystoreLogo} alt="playstore_logo" height="19px" /></a>
                        <ReactTooltip id="ll" place="right" effect="float" type="light"><img src={LoveLive} alt="loveliveschoolidolfestival_coverimage" /></ReactTooltip>
                    </li>
                </ul>
            </li>
            <li><a>Interactive Film</a>
                <ul>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Beyond:_Two_Souls" target="_blank" rel="noopener noreferrer" data-tip data-for="beyond">Beyond: Two Souls <img src={PlayStationLogo} alt="ps_logo" height="35px" /> <img src={WindowsLogo} alt="windows_logo" height="19px" /></a>
                        <ReactTooltip id="beyond" place="right" effect="float" type="light"><img src={Beyond2Souls} alt="beyondtwosouls_coverimage" /></ReactTooltip>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Detroit:_Become_Human" target="_blank" rel="noopener noreferrer" data-tip data-for="detroit">Detroit: Become Human <img src={PlayStationLogo} alt="ps_logo" height="35px" /> <img src={WindowsLogo} alt="windows_logo" height="19px" /></a>
                        <ReactTooltip id="detroit" place="right" effect="float" type="light"><img src={Detroit} alt="detroitbecomehuman_coverimage" /></ReactTooltip>
                    </li>
                </ul>
            </li>
            <li><a>Action-Adventure Game</a>
                <ul>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/The_Last_of_Us" target="_blank" rel="noopener noreferrer" data-tip data-for="tlou">The Last of Us <img src={PlayStationLogo} alt="ps_logo" height="35px" /></a>
                        <ReactTooltip id="tlou" place="right" effect="float" type="light"><img src={TLOU} alt="thelastofus_coverimage" /></ReactTooltip>
                    </li>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Quantum_Break" target="_blank" rel="noopener noreferrer" data-tip data-for="quantum">Quantum Break <img src={WindowsLogo} alt="windows_logo" height="19px" /> <img src={XboxLogo} alt="xbox_logo" height="35px" /></a>
                        <ReactTooltip id="quantum" place="right" effect="float" type="light"><img src={QuantumBreak} alt="quantumbreak_coverimage" /></ReactTooltip>
                    </li>
                </ul>
            </li>
            <li><a>Racing Game</a>
                <ul>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Need_for_Speed:_Most_Wanted_(2005_video_game)" target="_blank" rel="noopener noreferrer" data-tip data-for="nfsmw">Need for Speed: Most Wanted (2005) <img src={PlayStationLogo} alt="ps_logo" height="35px" /> <img src={XboxLogo} alt="xbox_logo" height="35px" /> <img src={WindowsLogo} alt="windows_logo" height="19px" /> <img src={NintendoLogo} alt="nintendo_logo" height="38px" /></a>
                        <ReactTooltip id="nfsmw" place="right" effect="float" type="light"><img src={NFSMW} alt="nfsmostwanted_coverimage" /></ReactTooltip>
                    </li>
                </ul>
            </li>
            <li><a>First-Person Shooter</a>
                <ul>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Counter-Strike:_Global_Offensive" target="_blank" rel="noopener noreferrer" data-tip data-for="csgo">Counter-Strike: Global Offensive <img src={PlayStationLogo} alt="ps_logo" height="35px" /> <img src={XboxLogo} alt="xbox_logo" height="35px" /> <img src={WindowsLogo} alt="windows_logo" height="19px" /> <img src={AppleLogo} alt="apple_logo" height="19px" /> <img src={LinuxLogo} alt="linux_icon" height="20px"></img></a>
                        <ReactTooltip id="csgo" place="right" effect="float" type="light"><img src={CSGO} alt="csgo_coverimage" /></ReactTooltip>
                    </li>
                </ul>
            </li>
            <li><a>Vehicular Combat Game</a>
                <ul>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Recoil_(video_game)" target="_blank" rel="noopener noreferrer" data-tip data-for="recoil">Recoil <img src={WindowsLogo} alt="windows_logo" height="19px" /></a>
                        <ReactTooltip id="recoil" place="right" effect="float" type="light"><img src={Recoil} alt="recoil_coverimage" /></ReactTooltip>
                    </li>
                </ul>
            </li>
            <li><a>Real-Time Strategy Game</a>
                <ul>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Command_%26_Conquer:_Tiberian_Sun" target="_blank" rel="noopener noreferrer" data-tip data-for="cncts">Command & Conquer: Tiberian Sun <img src={WindowsLogo} alt="windows_logo" height="19px" /></a>
                        <ReactTooltip id="cncts" place="right" effect="float" type="light"><img src={CommandAndConquerTiberianSun} alt="commanandconquertiberiansun_coverimage" /></ReactTooltip>
                    </li>
                </ul>
            </li>
            <li><a>Survival Horror</a>
                <ul>
                    <li>
                        <a href="https://en.wikipedia.org/wiki/Dead_Space_(video_game)" target="_blank" rel="noopener noreferrer" data-tip data-for="deadspace">Dead Space <img src={PlayStationLogo} alt="ps_logo" height="35px" /> <img src={XboxLogo} alt="xbox_logo" height="35px" /> <img src={WindowsLogo} alt="windows_logo" height="19px" /></a>
                        <ReactTooltip id="deadspace" place="right" effect="float" type="light"><img src={DeadSpace} alt="deadspace_coverimage" /></ReactTooltip>
                    </li>
                </ul>
            </li>
        </ul>
    );
}

export default Tree;