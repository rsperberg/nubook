class MainController < UIViewController
    def initWithNibName(name, bundle: bundle)
        super
        self
    end

    def loadView
        self.view = UIWebView.alloc.init
    end

    def viewDidLoad
        self.view.delegate = self
        self.view.scrollView.scrollEnabled = false
        self.view.scrollView.bounces = false
        path = NSBundle.mainBundle.pathForResource('siddhartha', ofType: 'html')
        url = NSURL.fileURLWithPath(path)
        self.view.loadRequest NSURLRequest.requestWithURL(url)
#        self.view.loadRequest(NSURLRequest.requestWithURL(NSURL.URLWithString("http://marcgg.com")))
    end

end