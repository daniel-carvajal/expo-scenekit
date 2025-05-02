// iOS/ExpoScenekitModule.swift
import ExpoModulesCore

public class ExpoSceneKitModule: Module {
    // Define the basic module
    public func definition() -> ModuleDefinition {
        Name("ExpoSceneKit")
        
        // Define the view
        View(ExpoSceneKitView.self) {
            // Declare the events this view can emit
            Events("onViewReady")

            // Declare props (defined in ExpoSceneKitViewProps)
            Prop("scenePath") { (view: ExpoSceneKitView, scenePath: String?) in
                if let path = scenePath {
                    view.loadSceneFromPath(path)
                }
            }
        }
    }
}