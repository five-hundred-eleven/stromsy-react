import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VikingsAtStraumseyPng from '../img/vikings_at_straumsey_banner-9.png';

class Blog extends Component {
    render() {
        return (
            <section>
                <section id="top-banner-picture">
                    <Link to="/"><img title="Lief Eriksson discovers Straumsey" alt="Lief Eriksson discovers Straumsey" src={VikingsAtStraumseyPng} /></Link>
                </section>
                <section id="content">
                    <article class="blog-post">
                        <h3>Lorem Ipsum</h3>
                        <p>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce at feugiat nisl, ut tincidunt metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In nec nisl ullamcorper, vehicula neque ac, consequat turpis. Curabitur quis tincidunt lacus. Duis dignissim convallis nunc, vel pharetra purus feugiat sit amet. Cras laoreet tempus turpis, eget cursus felis vehicula vel. Etiam congue ex at mollis aliquet. Duis metus quam, tincidunt nec auctor eu, posuere ultrices sem. In vel lacus at purus venenatis faucibus vitae a felis. Vivamus volutpat mollis massa, vel commodo erat pharetra sit amet. Etiam ac mi orci. Integer non turpis venenatis, fermentum ligula molestie, facilisis nisi. Fusce viverra mattis egestas.
                        </p>
                        <blockquote>
                            <p>

                                 Maecenas fermentum sapien ex, in eleifend neque mollis ac. Maecenas vel lectus auctor, maximus nunc id, pharetra nibh. Praesent vulputate viverra nibh, eget lobortis enim interdum ut. Donec nulla est, posuere eget ultricies sit amet, bibendum id nunc. Pellentesque congue urna sit amet est tincidunt, non sagittis mi consectetur. Quisque a sem pellentesque, lobortis magna quis, pretium eros. Suspendisse mi justo, vehicula id maximus et, porta at justo. Vestibulum lorem metus, lobortis nec bibendum nec, egestas at dui. Nulla laoreet sed ante consectetur semper. Sed consequat est et lacus sagittis, fermentum aliquet risus consequat. Aliquam vitae dolor et ipsum luctus fringilla. Nullam vitae quam justo.
                            </p>
                            <p>

                             Praesent convallis sed sapien eu fringilla. Morbi condimentum pellentesque tellus, nec tempor nisi commodo sit amet. Phasellus efficitur massa leo, nec blandit massa fringilla posuere. Curabitur et velit eu ante accumsan iaculis. Duis turpis est, consequat vel justo at, convallis porttitor dui. Nam faucibus egestas enim, at congue dolor vestibulum quis. Vivamus aliquet pulvinar neque, eget lacinia lacus viverra vitae. Etiam sapien urna, commodo nec venenatis non, porta quis mi. Sed at posuere magna. In sem tellus, bibendum facilisis dapibus nec, posuere vel dolor. Maecenas et nisl quis diam egestas consectetur sit amet dapibus elit. Etiam sed lacus lorem. Suspendisse risus lectus, mattis eget lectus nec, hendrerit malesuada neque. Sed vestibulum ut odio non ornare. Praesent id lectus eu est sagittis fringilla non id ligula. Sed vitae velit erat. 
                            </p>
                        </blockquote>
                        <p>

                            <Link to="/projects">Maecenas</Link> fermentum sapien ex, in eleifend neque mollis ac. Maecenas vel lectus auctor, maximus nunc id, pharetra nibh. Praesent vulputate viverra nibh, eget lobortis enim interdum ut. Donec nulla est, posuere eget ultricies sit amet, bibendum id nunc. Pellentesque congue urna sit amet est tincidunt, non sagittis mi consectetur. Quisque a sem pellentesque, lobortis magna quis, pretium eros. Suspendisse mi justo, vehicula id maximus et, porta at justo. Vestibulum lorem metus, lobortis nec bibendum nec, egestas at dui. Nulla laoreet sed ante consectetur semper. Sed consequat est et lacus sagittis, fermentum aliquet risus consequat. Aliquam vitae dolor et ipsum luctus fringilla. Nullam vitae quam justo.
                        </p>
                        <p class="post-time">13:13</p>
                    </article>
                </section>
                <section id="more-button"></section>
            </section>
        );
    }
}

export default Blog
