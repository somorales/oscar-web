import React from "react";
import screens from "../assets/imagenes/screens_agora.png";

export default function AgoraProject() {
  return (
    <div>
      <div className="mx-auto max-w-container px-6 sm:px-8 lg:px-48">
        <div className="pt-20">
          <h1 className="text-2xl font-bold mb-4">
            How I can help artists to grow visibility and make connections with
            other local or global artists? Let’s see how I did it with “Agora”.
          </h1>

          <div className="mb-6">
            <h2 className="text-lg font-semibold mb-3">Goals:</h2>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <span className="text-black font-bold">•</span>
                <span>
                  Facilitate artists an online space where they can share their
                  work
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-black font-bold">•</span>
                <span>Interact with colleagues</span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-black font-bold">•</span>
                <span>
                  Gain visibility and recognition Be part of an artistic and
                  creative community
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <span className="text-black font-bold">•</span>
                <span>Be part of an artistic and creative community</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">First steps:</h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span>
                Learn what my client wanted to accomplish, meet his goals as an
                artist but also his expectations about the App. Egor (my
                client), wanted provide artists an online space to share their
                work, interact with colleagues, and gain visibility within a
                creative community.
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Process:</h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span>
                The project began with a user research plan, including
                interviews, surveys, and user persona creation to understand the
                needs, pain points, and goals of the target audience, artists
                seeking visibility, community, and collaboration. When I was
                working in this phase, I <b>detected an insight</b> that came
                from different artists: “I want something visually different,
                not minimalistic design, maybe something out of the common rules
                regarding the apps we use now”.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span>
                In the Ideation stage, I called Egor and together build a
                moodboard, then I move forward generating multiple design
                solutions and sketching out concepts, Low-fidelity wireframes to
                outline the core user journeys.
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3">Issues:</h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span>
                During the UI design phase, there were challenges in aligning
                the client's vision with established UX/UI principles.{" "}
                <b>
                  The client often had ideas that diverged from best practices{" "}
                </b>
                , which led to design friction. As a designer, I aimed to
                balance my responsibility to create an intuitive, user-friendly
                interface with the client's desire for a unique “out of the box”
                aesthetic features. This required open communication and
                compromise, where I explained the ideas behind UX/UI standards,
                such as visual hierarchy, consistency, and accessibility, while{" "}
                <b> remaining flexible</b> to incorporate the client's creative
                input.
              </span>
            </li>
            <li className="flex items-start space-x-2">
              <span>
                With this in mind, the testing phase of Agora was critical
                because I wanted to validate and make sure that the design was
                usable above all, but also meeting the standards of my client.
                Real users were invited to interact with the app and after four
                iterations <b> we manage a balance</b> between usability and the
                visuals.
              </span>
            </li>
          </ul>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-3"> Results: </h2>
          <ul className="space-y-2">
            <li className="flex items-start space-x-2">
              <span className="text-black font-bold">•</span>
              <span>
                Agora is now at a significant milestone, with the project
                reaching its happy path completion. The owner is actively
                seeking co-founders and developers to collaborate in
                transforming Agora from a functional prototype into an app ready
                for launch in the market. The next phase will focus on scaling
                the platform, enhancing features, and ensuring a smooth user
                experience for artists.
              </span>
            </li>
          </ul>
        </div>
        <div className="aspect-auto mt-8 py-4">
          <img
            src={screens}
            alt="screens"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
