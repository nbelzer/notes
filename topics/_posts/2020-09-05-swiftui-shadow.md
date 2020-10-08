---
title: SwiftUI Styles using Viewbuilders
subtitle: How to apply preset styles in SwiftUI using Viewbuilders.
layout: topic
author: nbelzer
tags: SwiftUI
last_modified: 2020-09-05 16:38:00 +0200
---

Using the ability to extend the `View` class in Swift we can add custom styles to our components. As an example this allows you to create different levels of shadow:

{% highlight swift linenos %}
enum ShadowClass {
    case xs
    case sm
    case md
}

extension View {
    @ViewBuilder
    func shadow(_ level: ShadowClass) -> some View {
        switch (level) {
        case .xs:
            self.shadow(color: Color.black.opacity(0.05), radius: 1, x: 0, y: 1)
        case .sm:
            self.shadow(color: Color.black.opacity(0.05), radius: 2, x: 0, y: 1)
        case .md:
            // We can even define multiple shadows to create a specific effect.
            self
                .shadow(color: Color.black.opacity(0.10), radius: 3, x: 0, y: 1)
                .shadow(color: Color.black.opacity(0.06), radius: 2, x: 0, y: 1)
        }
    }
}
{% endhighlight %}


By extending `View` we are able to call `.shadow` on all subclasses of `View`, which all our components are. This allows us to define a strict set of shadows that we can use for all our components and that we can edit in one place.

{% highlight swift lineos %}
struct ViewWithShadow: View {
    var body: some View {
        HStack {
            Text("This view has some shadow")
        }
        .padding()
        .cornerRadius(8)
        .shadow(.md)
    }
}
{% endhighlight %}
