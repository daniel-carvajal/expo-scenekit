// iOS/ExpoScenekitModule.swift
import ExpoModulesCore

public class ExpoSceneKitModule: Module {
    // Define the basic module
    public func definition() -> ModuleDefinition {
        Name("ExpoSceneKit")
        
        // Just define the view
        View(ExpoSceneKitView.self) {
            // No props needed for minimal implementation
        }
    }
}